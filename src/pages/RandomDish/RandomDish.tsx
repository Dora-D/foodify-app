import { FC } from "react";

import { DishCard } from "../../components/DishCard/DishCard";
import { ButtonGroup } from "../../components/ButtonGroup/ButtonGroup";

import { useRandomDish } from "./useRandomDish";
import "./random-dish.scss";

export const RandomDish: FC = () => {
  const { randomDish, onSkip, onLike } = useRandomDish();
  return (
    <div className="random-dish">
      <div className="random-dish__wrapper">
        <DishCard {...randomDish} />
        <ButtonGroup onLike={onLike} onSkip={onSkip} />
      </div>
    </div>
  );
};
