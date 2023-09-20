import { Button } from '../../ui/Button';
import { CartItem } from './CartItem';
import { clearCart, getCart } from '../../store/slices/cartSlice';
import { EmptyCart } from './EmptyCart';
import { LinkButton } from '../../ui/LinkButton';
import { useDispatch, useSelector } from 'react-redux';

export const Cart = () => {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-600 border-b border-stone-600">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-7 flex items-center justify-between space-x-4">
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          <div className="items-center flex justify-center gap-1">
            <span className="material-symbols-rounded">delete</span>
            <span>Clear cart</span>
          </div>
        </Button>
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
      </div>
    </div>
  );
};
