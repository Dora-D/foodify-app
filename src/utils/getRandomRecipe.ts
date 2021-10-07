export const getRandomRecipe = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );

  return await response.json();
};
