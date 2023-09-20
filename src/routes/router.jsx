import { action as updateOrderAction } from '../features/order/UpdateOrder';
import { AppLayout } from '../ui/AppLayout';
import { createBrowserRouter } from 'react-router-dom';
import { action as createOrderAction } from '../features/order/CreateOrder';
import { Error } from '../ui/Error';
import { loader as menuLoader } from '../features/menu/Menu';
import { loader as orderLoader } from '../features/order/Order';
import { lazy, Suspense } from 'react';
import { Loader } from "../ui/Loader";

const Home = lazy(() => import('../ui/Home'));
const Contact = lazy(() => import('../ui/Contact'));
const Menu = lazy(() => import('../features/menu/Menu'));
const AboutUs = lazy(() => import('../ui/AboutUs'));
const Cart = lazy(() => import('../features/cart/Cart'));
const CreateOrder = lazy(() => import('../features/order/CreateOrder'));
const Order = lazy(() => import('../features/order/Order'));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/about-us',
        element: (
          <Suspense fallback={<Loader />}>
            <AboutUs />
          </Suspense>
        )
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/menu',
        loader: menuLoader,
        element: (
          <Suspense fallback={<Loader />}>
            <Menu />
          </Suspense>
        )
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        )
      },
      {
        path: '/order/new',
        action: createOrderAction,
        element: (
          <Suspense fallback={<Loader />}>
            <CreateOrder />
          </Suspense>
        )
      },
      {
        path: '/order/:orderId',
        loader: orderLoader,
        action: updateOrderAction,
        element: (
          <Suspense fallback={<Loader />}>
            <Order />
          </Suspense>
        )
      },
    ],
  },
]);
