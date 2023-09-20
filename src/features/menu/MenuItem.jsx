import { addItem, getCurrentQuantityById } from '../../store/slices/cartSlice';
import { Button } from '../../ui/Button';
import { DeleteItem } from '../cart/DeleteItem';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateItemQuantity } from '../cart/UpdateItemQuantity';

export const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li>
      <div className="relative h-[370px] w-full rounded-lg border border-zinc-600 bg-zinc-700 shadow-lg shadow-zinc-600/70">
        <div className="flex items-center justify-center">
          <img
            className={`m-3 h-40 rounded-lg ${
              soldOut ? 'opacity-70 grayscale' : ''
            }`}
            src={imageUrl}
            alt="pizza image"
          />
        </div>

        <div className="mx-3 mb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 text-sm capitalize text-slate-200">
            {ingredients.join(', ')}
          </p>

          <div className="flex items-center justify-start">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
            </span>
          </div>
          
          <div className="absolute bottom-5 left-3 right-3 m-auto mt-4 flex items-center justify-between">
            {isInCart && (
              <>
                <DeleteItem pizzaId={id} />
                <UpdateItemQuantity
                  pizzaId={id}
                  currentQuantity={currentQuantity}
                />
              </>
            )}
            {!soldOut && !isInCart && (
              <Button disabled={soldOut} type="small" onClick={handleAddToCart}>
                <div className="flex items-center justify-center gap-1">
                  <span className="material-symbols-rounded">shopping_cart</span>
                  <span>Add to cart</span>
                </div>
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
