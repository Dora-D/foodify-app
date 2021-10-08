import { useEffect, useState } from "react";

import { IDish } from "../../static";
import { setDishToLocalStorage } from "../../utils/setDishToLocalStorage";
import { taransformRecipe } from "../../utils/taransformRecipe.js";
import { getRandomRecipe } from "../../utils/getRandomRecipe";

export const useRandomDish = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [randomDish, setrandomDish] = useState<IDish>({
    id: "",
    title: "",
    recipe: "",
  });

  useEffect(() => {
    getNewRandomRecipe();
  }, []);

  const getNewRandomRecipe = () => {
    setIsLoading(true);
    getRandomRecipe().then((data) => {
      setrandomDish(taransformRecipe(data));
      setIsLoading(false);
    });
  };

  const onSkip = () => {
    getNewRandomRecipe();
  };

  const onLike = () => {
    setDishToLocalStorage(randomDish);
    getNewRandomRecipe();
  };

  return { randomDish, isLoading, onSkip, onLike };
};
