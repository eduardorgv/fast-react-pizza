import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { MenuItem } from "./MenuItem";

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export const Menu = () => {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};
