const addToInProgressRecipes = (foodItem, type, isInProgress) => {
  if (isInProgress) return null;
  localStorage.inProgressRecipes = JSON.stringify({
    ...JSON.parse(localStorage.inProgressRecipes),
    [`${type}s`]: {
      ...JSON.parse(localStorage.inProgressRecipes)[`${type}s`],
      [foodItem.item[`id${foodItem.key}`]]: Object.keys(foodItem.item)
        .filter((item) => item.includes('strIngredient') && foodItem.item[item])
        .map((ingredient) => foodItem.item[ingredient]),
    },
  });
  return foodItem.item;
};

export default addToInProgressRecipes;
