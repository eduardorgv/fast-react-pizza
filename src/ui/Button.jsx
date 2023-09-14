import { Link } from 'react-router-dom';

export const Button = ({ children, disabled = false, to, type }) => {
  const base =
    'rounded-full bg-green-300 text-base text-zinc-800 transition-colors duration-300 hover:bg-green-400 disabled:cursor-not-allowed';
  const styles = {
    primary: base + ' px-4 py-2 md:px-6 md:py-4',
    small: base + ' px-8 py-1 md:px-4 md:py-2 text-sm'
  }


  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};
