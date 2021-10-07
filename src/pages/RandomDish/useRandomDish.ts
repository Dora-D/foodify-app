import { useEffect, useState } from "react";

import { IDishes } from "../../static";
import { setDishToLocalStorage } from "../../utils/setDishToLocalStorage";
import { taransformRecipe } from "../../utils/taransformRecipe.js";
import { getRandomRecipe } from "../../utils/getRandomRecipe";

export const useRandomDish = () => {
  const [randomDish, setrandomDish] = useState<IDishes>({
    title: "",
    recipe: "",
  });

  useEffect(() => {
    getNewRandomRecipe();
  }, []);

  const getNewRandomRecipe = () => {
    getRandomRecipe().then((data) => {
      setrandomDish(taransformRecipe(data));
    });
  };

  const onSkip = () => {
    getNewRandomRecipe();
  };

  const onLike = () => {
    setDishToLocalStorage(randomDish);
    getNewRandomRecipe();
  };

  return { randomDish, onSkip, onLike };
};
