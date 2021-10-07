import { IDishes } from "../static";

export const setDishesToLocalStorage = (dishes: IDishes[]) => {
  localStorage.setItem("todos", JSON.stringify(dishes));
};
