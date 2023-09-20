import { useDispatch } from 'react-redux';
import { deleteItem } from '../../store/slices/cartSlice';

export const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="rounded-full bg-red-500 px-8 py-1 text-sm
      transition-colors duration-300 hover:bg-red-400 disabled:cursor-not-allowed 
      md:px-4 md:py-2"
      onClick={() => dispatch(deleteItem(pizzaId))}
    >
      <div className="flex items-center justify-center gap-1">
        <span className="material-symbols-rounded">delete</span>
        <span>Delete</span>
      </div>
    </button>
  );
};
