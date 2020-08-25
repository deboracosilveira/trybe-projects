const checkIsFavorite = (id) => {
  if (localStorage.favoriteRecipes) {
    const foodIsFavorite = JSON.parse(localStorage.favoriteRecipes).some(
      (recipe) => recipe.id === id,
    );
    return foodIsFavorite;
  }
  localStorage.favoriteRecipes = JSON.stringify([]);
  return false;
};

export default checkIsFavorite;
