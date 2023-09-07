import { Link } from "react-router-dom";
import { SearchOrder } from "../features/order/SearchOrder";

export const Header = () => {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Edu</p>
    </header>
  );
};
