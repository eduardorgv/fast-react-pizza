import { CreateUser } from '../features/user/CreateUser';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center sm:my-16">
      <h1 className="mb-6 text-7xl font-semibold sm:text-8xl md:text-9xl">
        The best pizza.
      </h1>
      <h2 className="mb-14 text-6xl font-semibold text-green-300 sm:text-7xl md:text-8xl">
        Straight out of the oven, straight to you.
      </h2>
      <CreateUser />
    </div>
  );
};
