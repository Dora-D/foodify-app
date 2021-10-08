import { FC } from "react";
import { createPortal } from "react-dom";

import { DishCard } from "../../components/DishCard/DishCard";
import { Modal } from "../../components/Modal/Modal";

import { useFavourites } from "./useFavourites";
import { IDish } from "../../static";
import plusIcon from "../../assets/imgs/plus-icon.svg";
import "./favourites.scss";

export const Favourites: FC = () => {
  const { favouritesDishes, isModal, portal, onSubmit, hendleModal } =
    useFavourites();

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
