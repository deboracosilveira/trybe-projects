import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Context } from '../../context/Context';
import { getFoodsByIngredient, getFoodsByName, getFoodsByFirstLetter } from '../../services/api';
import { SearchBarContainer } from './styles';

const handler = (event, setFunc) => {
  setFunc(event.target.value);
};

const checkIsNull = (resp) => {
  if (!resp) {
    return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  return null;
};

const checkLength = (type, arr, setRedirect, foodType, setFunc) => {
  const key = type === 'meal' ? 'Meal' : 'Drink';
  if (!arr) return null;
  if (arr.length === 1) {
    setRedirect({
      shouldRedirect: true,
      type: foodType.toLowerCase(),
      id: arr[0][`id${key}`],
    });
  }
  return setFunc(arr);
};

const checkAll = (resp, type, setRedirect, foodType, setFunc) => {
  checkIsNull(resp);
  checkLength(type, resp, setRedirect, foodType, setFunc);
};

const filterFoods = (foodType, input, option, setFunc, setRedirect) => {
  let type = 'cocktail';
  if (foodType === 'Comidas') {
    type = 'meal';
  }
  switch (option) {
    case 'ingredient':
      getFoodsByIngredient(type, input).then((resp) => {
        checkAll(resp, type, setRedirect, foodType, setFunc);
      });
      break;
    case 'name':
      getFoodsByName(type, input).then((resp) => {
        checkAll(resp, type, setRedirect, foodType, setFunc);
      });
      break;
    case 'first-letter':
      if (input.length === 1) {
        getFoodsByFirstLetter(type, input).then((resp) => {
          checkAll(resp, type, setRedirect, foodType, setFunc);
        });
      } else {
        alert('Sua busca deve conter somente 1 (um) caracter');
      }
      break;
    default:
  }
};

const SearchBar = ({ foodType, ingredient }) => {
  const [redirect, setShoudlRedirect] = useState({ shouldRedirect: false, type: '', id: '' });
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const { setMeals, setDrinks } = useContext(Context);

  useEffect(() => {
    console.log(ingredient);
    if (ingredient) {
      let type = 'cocktail';
      let setFunc = setDrinks;
      if (foodType === 'Comidas') {
        type = 'meal';
        setFunc = setMeals;
      }
      getFoodsByIngredient(type, ingredient).then((resp) => {
        checkAll(resp, type, setShoudlRedirect, foodType, setFunc);
      });
    }
  }, []);

  const createInputRadio = (value, testid, name) => (
    <SearchBarContainer.RadioLabel htmlFor={value}>
      <input
        value={value}
        type="radio"
        data-testid={testid}
        id={value}
        checked={selectedOption === `${value}`}
        onChange={(event) => handler(event, setSelectedOption)}
      />
      {name}
    </SearchBarContainer.RadioLabel>
  );
  if (redirect.shouldRedirect) return <Redirect to={`/${redirect.type}/${redirect.id}`} />;
  return (
    <SearchBarContainer>
      <SearchBarContainer.Input
        type="text"
        placeholder="Search recipe"
        data-testid="search-input"
        onChange={(event) => handler(event, setInputText)}
      />
      <SearchBarContainer.Radios>
        {createInputRadio('ingredient', 'ingredient-search-radio', 'Ingredient')}
        {createInputRadio('name', 'name-search-radio', 'Name')}
        {createInputRadio('first-letter', 'first-letter-search-radio', 'First letter')}
      </SearchBarContainer.Radios>
      <SearchBarContainer.Button
        data-testid="exec-search-btn"
        type="button"
        onClick={() => {
          if (foodType === 'Comidas') {
            filterFoods(foodType, inputText, selectedOption, setMeals, setShoudlRedirect);
          } else {
            filterFoods(foodType, inputText, selectedOption, setDrinks, setShoudlRedirect);
          }
        }}
      >
        Search
      </SearchBarContainer.Button>
    </SearchBarContainer>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  foodType: PropTypes.string.isRequired,
  ingredient: PropTypes.string.isRequired,
};
