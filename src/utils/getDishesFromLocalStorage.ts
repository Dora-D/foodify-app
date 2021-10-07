export const getDishesFromLocalStorage = () => {
  const items = localStorage.getItem("dishes");
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};
