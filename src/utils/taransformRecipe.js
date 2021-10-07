export const taransformRecipe = ({ meals: [dish] }) => {
  console.log(dish);
  return {
    id: dish.idMeal,
    dishImg: dish.strMealThumb,
    title: dish.strMeal,
    recipe: dish.strInstructions,
  };
};
