export const taransformRecipe = ({ meals: [dish] }) => {
  return {
    dishImg: dish.strMealThumb,
    title: dish.strMeal,
    recipe: dish.strInstructions,
  };
};
