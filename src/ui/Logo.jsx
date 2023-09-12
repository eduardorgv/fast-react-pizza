import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center uppercase">
      <img src="/logo.png" alt="Pizza Rush Logo" className="w-11" />
      <p className="text-stone-300">
        Pizza
        <br />
        <span className="text-green-300">Rush.</span>
      </p>
    </Link>
  );
};
