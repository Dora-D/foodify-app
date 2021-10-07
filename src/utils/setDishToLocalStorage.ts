import { IDish } from "../static";
import { getDishesFromLocalStorage } from "./getDishesFromLocalStorage";

export const setDishToLocalStorage = (dish: IDish) => {
  const dishes = getDishesFromLocalStorage();
  dishes.push(dish);
  localStorage.setItem("dishes", JSON.stringify(dishes));
};
