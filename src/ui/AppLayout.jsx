import { CartOverview } from '../features/cart/CartOverview';
import { Header } from './Header';
import { Loader } from './Loader';
import { Outlet, useNavigation } from 'react-router-dom';

export const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-auto">
        <main className="mx-auto max-w-4xl mt-4">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
};
