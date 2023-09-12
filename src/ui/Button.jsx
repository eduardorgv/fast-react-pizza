import { Link } from 'react-router-dom';

export const Button = ({ children, disabled = false, to }) => {
  const className =
    'rounded-full bg-green-300 px-4 py-2 text-base text-zinc-800 transition-colors duration-300 hover:bg-green-400 disabled:cursor-not-allowed sm:px-6 sm:py-4';

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};
