const recipesModel = require('../models/recipesModel');
const Recipes = require('../models/recipesModel');

const showAll = async (req, res) => {
  const allRecipes = await Recipes.getAll();

  res.render('home', { allRecipes, user: req.user });
};

const showOne = async (req, res) => {
  const recipeDetails = await Recipes.getById(req.params.id);

  res.render('recipes/details', { recipeDetails, user: req.user });
};

const searchQuery = async (req, res) => {
  const searchedRecipes = await Recipes.getByName(req.query.q);
  const userRecipes = await recipesModel.getUserRecipes(req.user.id);

  res.render('recipes/search', { searchedRecipes, userRecipes, user: req.user });
};

const renderNew = (req, res) => res.render('recipes/new', { user: req.user });

const addNew = async (req, res) => {
  const { name, ingredients, instructions } = req.body;
  const { name: userName, id } = req.user;
  await recipesModel.addRecipe(id, userName, name, ingredients, instructions);

  return res.redirect('/');
};

const renderUserRecipes = async (req, res) => {
  const recipes = await recipesModel.getUserRecipes(req.user.id);
  res.status(200).render('me/recipes', { recipes, user: req.user });
};

const renderEditRecipe = async (req, res) => {
  const { id } = req.params;
  const recipe = await recipesModel.getRecipeFromId(id);

  res.status(200).render('recipes/edit', { user: req.user, recipe });
};

const editRecipe = async (req, res) => {
  const { id } = req.params;
  const { name, ingredients, instructions } = req.body;
  try {
    await recipesModel.editRecipe(id, name, ingredients, instructions);
    res.redirect('/');
  } catch (err) {
    res.redirect('/');
  }
};

module.exports = {
  showAll,
  showOne,
  searchQuery,
  addNew,
  renderNew,
  renderEditRecipe,
  editRecipe,
  renderUserRecipes,
};
