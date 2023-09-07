import { Cart } from "../features/cart/Cart";
import { createBrowserRouter } from "react-router-dom";
import { CreateOrder } from "../features/order/CreateOrder";
import { Home } from "../ui/Home";
import { Menu } from "../features/menu/Menu";
import { Order } from "../features/order/Order";
import { AppLayout } from "../ui/AppLayout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);
