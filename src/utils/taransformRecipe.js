export const taransformRecipe = ({ meals: [dish] }) => {
  console.log(dish);
  return {
    id: dish.idMeal || Date.now(),
    dishImg: dish.strMealThumb,
    title: dish.strMeal,
    recipe: dish.strInstructions,
  };
};
