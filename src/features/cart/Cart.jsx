import { Link } from 'react-router-dom';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export const Cart = () => {
  const cart = fakeCart;

  return (
    <div>
      <Link
        className="text-md rounded-3xl bg-green-300 px-4 py-2 text-zinc-800 transition-colors duration-300 hover:bg-green-400"
        to="/menu"
      >
        &larr; Back to menu
      </Link>

      <h2>Your cart, %NAME%</h2>

      <div>
        <Link to="/order/new">Order pizzas</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
};
