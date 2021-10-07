import { getDishesFromLocalStorage } from "../utils/getDishesFromLocalStorage";

export const BaseFavouritesDishes = getDishesFromLocalStorage();

export interface IDish {
  id: string;
  dishImg?: string;
  title: string;
  recipe: string;
}
