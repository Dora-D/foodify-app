import { getDishesFromLocalStorage } from "../utils/getDishesFromLocalStorage";

export const BaseFavouritesDishes = getDishesFromLocalStorage();

export interface IDishes {
  dishImg?: string;
  title: string;
  recipe: string;
}
