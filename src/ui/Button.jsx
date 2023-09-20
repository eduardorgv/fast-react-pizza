import { Link } from 'react-router-dom';

export const Button = ({ children, disabled = false, to, type, onClick }) => {
  const base =
    'rounded-full bg-green-400 text-base text-zinc-800 transition-colors duration-300 hover:bg-green-300 disabled:cursor-not-allowed';
  const styles = {
    primary: base + ' px-4 py-2 md:px-5 md:py-3',
    secondary:
      'rounded-full border-2 border-stone-300 text-base text-zinc-300 transition-colors duration-300 hover:bg-red-500 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-3',
    small: base + ' px-8 py-1 md:px-4 md:py-2 text-sm',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};
