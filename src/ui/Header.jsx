import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { SearchOrder } from '../features/order/SearchOrder';
import { useState } from 'react';

export const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const handleSetNavbar = () => {
    setNavbar((value) => !value);
  };

  return (
    <nav className="w-full bg-zinc-800 px-4 py-3 text-green-300 sm:px-6">
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          <Logo />
          <OpenMenuButton onSetNavbar={handleSetNavbar} navbar={navbar} />
        </div>

        <HiddenMenu navbar={navbar} />

        <div className="hidden space-x-2 md:inline-block">
          <SearchOrder />
        </div>
      </div>
    </nav>
  );
};

const OpenMenuButton = ({ onSetNavbar, navbar }) => {
  return (
    <div className="md:hidden">
      <button
        className="rounded-md p-2 text-gray-700 outline-none"
        onClick={onSetNavbar}
      >
        {navbar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-stone-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-stone-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

const HiddenMenu = ({ navbar }) => {
  return (
    <div
    className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
      navbar ? 'block' : 'hidden'
    }`}
  >
    <div className="mt-4 flex justify-center md:hidden">
      <SearchOrder />
    </div>
    <ul className="items-center justify-center space-y-8 text-stone-300 md:flex md:space-x-6 md:space-y-0">
      <li>
        <Link className="mr-2 block py-2 hover:text-stone-400 lg:px-5 lg:py-2.5">
          Home
        </Link>
      </li>
      <li>
        <Link className="mr-2 block py-2 hover:text-stone-400 lg:px-5 lg:py-2.5">
          About us
        </Link>
      </li>
      <li>
        <Link className="mr-2 block py-2 hover:text-stone-400 lg:px-5 lg:py-2.5">
          Contact
        </Link>
      </li>
    </ul>
  </div>
  )
}
