import { useState, useEffect } from 'react';
import { getFoodById } from '../services/api';
import checkIsFavorite from '../helpers/checkIsFavorite';

const useFoodDetails = (path, id) => {
  const [meal, setMeal] = useState({});
  const [mealValue, setMealValue] = useState({});
  const [drink, setDrink] = useState({});
  const [drinkValue, setDrinkValue] = useState({});
  const [isInProgress, setIsInProgress] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  const type = path.includes('comidas') ? 'meal' : 'cocktail';
  const inProgress = path.includes('in-progress');

  useEffect(() => {
    getFoodById(type, id).then((resp) => {
      if (type === 'meal') {
        setMeal(resp[0]);
      } else {
        setDrink(resp[0]);
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (localStorage.inProgressRecipes) {
      const foodIsInProgress = Object.keys(
        JSON.parse(localStorage.inProgressRecipes)[`${type}s`],
      ).includes(id);
      setIsInProgress(foodIsInProgress);
    } else {
      localStorage.inProgressRecipes = JSON.stringify({ cocktails: {}, meals: {} });
    }
    setIsFavorite(checkIsFavorite(id));
  }, []);

  useEffect(() => {
    setMealValue({ item: meal, key: 'Meal', path: 'comidas', type: 'comida' });
    setDrinkValue({ item: drink, key: 'Drink', path: 'bebidas', type: 'bebida' });
  }, [meal, drink]);

  const food = path.includes('comidas') ? mealValue : drinkValue;

  return { loading, food, isInProgress, inProgress, type, isFavorite, setIsFavorite };
};

export default useFoodDetails;
