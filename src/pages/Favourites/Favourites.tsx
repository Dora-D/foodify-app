import { useState } from "react";
import { createPortal } from "react-dom";

import { DishCard } from "../../components/DishCard/DishCard";
import { Modal } from "../../components/Modal/Modal";

import { IDish } from "../../static";
import { getDishesFromLocalStorage } from "../../utils/getDishesFromLocalStorage";
import { setDishToLocalStorage } from "../../utils/setDishToLocalStorage";
import plusIcon from "../../assets/imgs/plus-icon.svg";
import "./favourites.scss";

export const Favourites = () => {
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

  return (
    <div className="favourites">
      {favouritesDishes.map((dish: IDish) => (
        <DishCard key={dish.id ? dish.id : dish.title + Date.now()} {...dish} />
      ))}
      <button className="favourites__add-recipe" onClick={hendleModal}>
        <img src={plusIcon} alt="Plus Recipe" />
      </button>
      {isModal &&
        createPortal(
          <Modal hendleModal={hendleModal} onSubmit={onSubmit} />,
          portal
        )}
    </div>
  );
};
