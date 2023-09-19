import { formatCurrency } from '../../utils/helpers';

export const OrderItem = ({ item, isLoadingIngredients, ingredients }) => {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>

      <p className="text-sm capitalize italic text-slate-300">
        {isLoadingIngredients ? 'Loading...' : ingredients?.join(', ')}
      </p>
    </li>
  );
};
