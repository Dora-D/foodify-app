import { FC } from "react";

import { IDish } from "../../static";
import "./dish-card.scss";

export const DishCard: FC<IDish> = ({ dishImg, title, recipe }) => {
  return (
    <div className="dish-card">
      <div className="dish-card__img-wrapper">
        <img src={dishImg} alt="Dish Img" />
      </div>
      <div className="dish-card__info">
        <h2>{title}</h2>
        <p>{recipe}</p>
      </div>
    </div>
  );
};
