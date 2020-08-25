import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  fetchApi,
  mealsCategoriesURL,
  drinksCategoriesURL,
  areasURL,
  ingredientsURL,
  initialMealsURL,
  initialDrinksURL,
  // randomMealURL,
} from '../services/api';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [mealsCategories, setMealsCategories] = useState([]);
  const [drinksCategories, setDrinksCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const [mealValues, setMealValues] = useState({});
  const [drinkValues, setDrinkValues] = useState({});

  const handleSuccess = (response, callback) => callback(response);

  const handleFailure = (error) => console.error(error.message);

  const getApi = async (URL, callback) => {
    if (!loading) return null;
    setLoading(true);
    return fetchApi(URL).then((response) => handleSuccess(response, callback), handleFailure);
  };

  // const getRandomMeals = () => {
  //   const newMeals = [];
  //   for (let i = 0; i < 12; i += 1) {
  //     getApi(randomMealURL, (meal) => {
  //       newMeals.push(...meal);
  //       if (i === 11) {
  //         setLoading(false);
  //         setMeals([...newMeals]);
  //       }
  //     });
  //   }
  // };

  const getAllApis = async () => {
    await getApi(mealsCategoriesURL, setMealsCategories);
    await getApi(drinksCategoriesURL, setDrinksCategories);
    await getApi(areasURL, setAreas);
    await getApi(ingredientsURL, setIngredients);
    await getApi(initialMealsURL, setMeals);
    await getApi(initialDrinksURL, setDrinks);
    // await getRandomMeals();
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getAllApis();
  }, []);

  useEffect(() => {
    setMealValues({
      list: [...meals],
      key: 'Meal',
      title: 'Comidas',
      categories: mealsCategories,
      URL: 'meal',
      path: 'comidas',
      setFunc: setMeals,
      initialValuesURL: initialMealsURL,
    });
    setDrinkValues({
      list: [...drinks],
      key: 'Drink',
      title: 'Bebidas',
      categories: drinksCategories,
      URL: 'cocktail',
      path: 'bebidas',
      setFunc: setDrinks,
      initialValuesURL: initialDrinksURL,
    });
  }, [meals, drinks]);

  const contextValue = {
    loading,
    mealsCategories,
    drinksCategories,
    areas,
    ingredients,
    meals,
    setMeals,
    drinks,
    setDrinks,
    mealValues,
    drinkValues,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
