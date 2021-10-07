import { useState } from "react";
import { IDish } from "../../static";

import { getDishesFromLocalStorage } from "../../utils/getDishesFromLocalStorage";
import { setDishToLocalStorage } from "../../utils/setDishToLocalStorage";

export const useFavourites = () => {
  const [favouritesDishes, setFavouritesDishes] = useState<IDish[]>(
    getDishesFromLocalStorage()
  );

  const [isModal, setIsModal] = useState<boolean>(false);

  const portal = document.getElementById("portal") as HTMLElement;

  const hendleModal = () => setIsModal((prevState) => !prevState);

  const onSubmit = ({ title, recipe }: { title: string; recipe: string }) => {
    const newDish = {
      id: Date.now(),
      title: title,
      recipe: recipe,
    };
    console.log(recipe);
    setFavouritesDishes((prevState) => [...prevState, newDish]);
    setDishToLocalStorage(newDish);
    hendleModal();
  };

  return { favouritesDishes, isModal, portal, onSubmit, hendleModal };
};
