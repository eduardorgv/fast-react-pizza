import { Button } from '../../ui/Button';
import {
  clearCart,
  getCart,
  getTotalCarPrice,
} from '../../store/slices/cartSlice';
import { createOrder } from '../../services/apiRestaurant';
import { EmptyCart } from '../cart/EmptyCart';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import store from '../../store/store';
import { fetchAddress } from '../../store/slices/thunks';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export const CreateOrder = () => {
  const [withPriority, setWithPriority] = useState(false);

  const formErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const dispatch = useDispatch();
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === 'loading';
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCarPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const handleFetchAddress = (e) => {
    e.preventDefault();
    dispatch(fetchAddress());
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <div>
              <input
                className="input w-full"
                type="tel"
                name="phone"
                required
              />
            </div>
            {formErrors?.phone && (
              <p className="mt-2 rounded-full bg-red-300 p-3 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
              disabled={isLoadingAddress}
              defaultValue={address}
            />
            {addressStatus === 'error' && (
              <p className="mt-2 rounded-full bg-red-300 p-3 text-xs text-red-700">
                {errorAddress}
              </p>
            )}
          </div>

          {!position.latitude && !position.longitude && (
            <span className="absolute right-1 top-1">
              <Button
                type="small"
                onClick={handleFetchAddress}
                disabled={isLoadingAddress}
              >
                Get position
              </Button>
            </span>
          )}
        </div>

        <div className="mb-5 flex items-center gap-2">
          <input
            className="h-4 w-4 accent-green-300 focus:outline-none"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude}, ${position.longitude}`
                : ''
            }
          ></input>

          <Button type="primary" disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting
              ? 'Placing order...'
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you';
  if (Object.keys(errors).length > 0) return errors;

  // if everything is okay, create new order and redirect
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
};
