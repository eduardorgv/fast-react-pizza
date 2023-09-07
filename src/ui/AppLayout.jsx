import { CartOverview } from "../features/cart/CartOverview";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <h1>Content</h1>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};