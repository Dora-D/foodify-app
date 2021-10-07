import { FC } from "react";

import "./dish-card.scss";

interface IDishCard {
  dishImg?: string;
  title: string;
  recipe: string;
}

export const DishCard: FC<IDishCard> = ({ dishImg, title, recipe }) => {
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
