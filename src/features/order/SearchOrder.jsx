import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchOrder = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-[8rem] rounded-full bg-stone-300 px-4 py-2 text-sm 
          text-zinc-800 transition-all duration-300 placeholder:text-zinc-800 
          sm:focus:w-80 focus:outline-none sm:w-64"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};
