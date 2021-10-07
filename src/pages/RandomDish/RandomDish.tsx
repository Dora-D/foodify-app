import { useEffect, useState } from "react";

import { DishCard } from "../../components/DishCard/DishCard";

import { taransformRecipe } from "../../utils/taransformRecipe.js";
import { getRandomRecipe } from "../../utils/getRandomRecipe";
import "./random-dish.scss";

export const RandomDish = () => {
  const [randomDish, setrandomDish] = useState({});

  useEffect(() => {
    getRandomRecipe().then((data) => {
      setrandomDish(taransformRecipe(data));
    });
  }, []);

  return (
    <div className="random-dish">
      {
        //@ts-ignore
        <DishCard {...randomDish} />
      }
    </div>
  );
};
