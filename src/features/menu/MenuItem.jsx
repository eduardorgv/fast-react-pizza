import { Button } from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

export const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <div className="h-[330px] w-full rounded-lg border border-zinc-600 bg-zinc-700 shadow-lg shadow-zinc-600/70">
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
          <p className="mb-4 text-sm capitalize text-slate-200">
            {ingredients.join(', ')}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
            </span>

            {!soldOut && (
              <Button disabled={soldOut} type="small">
                Add to cart
              </Button>
            )}

          </div>
        </div>
      </div>
    </li>
  );
};
