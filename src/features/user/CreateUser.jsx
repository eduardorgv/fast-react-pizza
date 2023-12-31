import { useState } from 'react';
import { Button } from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

export const CreateUser = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-xl md:text-2xl">
        Welcome! Please start by telling us your name:
      </p>

      <input
        className="mb-4 w-64 rounded-full bg-stone-300 px-4 py-2 
        text-sm text-zinc-800 transition-all duration-300 
        placeholder:text-zinc-800 focus:outline-none sm:focus:w-80"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
};
