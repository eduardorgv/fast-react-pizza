import { Link } from 'react-router-dom';
import { SearchOrder } from '../features/order/SearchOrder';
import { Username } from '../features/user/Username';

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-zinc-800 px-4 py-3 uppercase text-green-300 sm:px-6">
      <Link className="tracking-widest " to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};
