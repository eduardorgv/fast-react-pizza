import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { MenuItem } from "./MenuItem";

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export const Menu = () => {
  const menu = useLoaderData();

  return (
    <ul className="grid mx-4 my-6 gap-12 grid-cols-autoFit h-fit md:mx-3">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};
