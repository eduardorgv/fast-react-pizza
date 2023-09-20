import { Button } from '../../ui/Button';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../store/slices/cartSlice';
import { useDispatch } from 'react-redux';

export const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <button
        className="h-8 w-8 rounded-full bg-slate-500 text-sm text-white transition-colors duration-300 hover:bg-slate-400"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        <span className="material-symbols-rounded flex items-center justify-center">
          remove
        </span>
      </button>

      <span className="text-sm font-medium">{currentQuantity}</span>

      <button
        className="h-8 w-8 rounded-full bg-slate-500 text-sm text-white transition-colors duration-300 hover:bg-slate-400"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        <span className="material-symbols-rounded flex items-center justify-center">
          add
        </span>
      </button>
    </div>
  );
};
