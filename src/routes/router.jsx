import { AppLayout } from "../ui/AppLayout";
import { Cart } from "../features/cart/Cart";
import { createBrowserRouter } from "react-router-dom";
import { CreateOrder, action as createOrderAction } from "../features/order/CreateOrder";
import { Error } from "../ui/Error";
import { Home } from "../ui/Home";
import { Menu, loader as menuLoader } from "../features/menu/Menu";
import { Order, loader as orderLoader } from "../features/order/Order";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader
      },
    ],
  },
]);
