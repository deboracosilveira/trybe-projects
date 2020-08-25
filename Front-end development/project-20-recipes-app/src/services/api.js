export const mealsCategoriesURL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
export const drinksCategoriesURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
export const areasURL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
export const ingredientsURL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
export const randomMealURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
export const initialMealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
export const initialDrinksURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const mealByIdURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export const fetchApi = async (URL) => {
  const responseKey = /meal/.test(URL) ? 'meals' : 'drinks';
  return fetch(URL)
    .then((response) => response.json())
    .then((responseJSON) => responseJSON[responseKey]);
};

export const getFoodById = (type, id) =>
  fetchApi(`https://www.the${type}db.com/api/json/v1/1/lookup.php?i=${id}`);

export const getFoodsByIngredient = (type, ingredient) =>
  fetchApi(`https://www.the${type}db.com/api/json/v1/1/filter.php?i=${ingredient}`);

export const getFoodsByName = (type, name) =>
  fetchApi(`https://www.the${type}db.com/api/json/v1/1/search.php?s=${name}`);

export const getFoodsByFirstLetter = (type, firstLetter) =>
  fetchApi(`https://www.the${type}db.com/api/json/v1/1/search.php?f=${firstLetter}`);

export const getFoodsByCategory = (type, category) =>
  fetchApi(`https://www.the${type}db.com/api/json/v1/1/filter.php?c=${category}`);

export const getFoodByRandom = (type) =>
  fetchApi(`https://www.the${type}db.com/api/json/v1/1/random.php`);

export const getIngredientsList = (type) =>
  fetchApi(`https://www.the${type}db.com/api/json/v1/1/list.php?i=list`);

export const getURLIngredientsImg = (type, name) =>
  `https://www.the${type}db.com/images/ingredients/${name}-Small.png`;
