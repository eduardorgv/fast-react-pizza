import { Link, useNavigate } from 'react-router-dom';

export const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  const className =
    'text-md rounded-3xl bg-zinc-300 px-4 py-2 text-zinc-800 transition-colors duration-300 hover:bg-zinc-400';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
