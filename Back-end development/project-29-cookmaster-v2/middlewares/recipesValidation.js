const model = require('../models/model');

const buildResponse = (message) => {
  const resp = { message };
  return resp;
};

// os campos "name", "ingredients" e "preparation" são obrigatórios
const validateFields = async (req, res, next) => {
  const { name, ingredients, preparation } = req.body;

  if (!name || !ingredients || !preparation) {
    return res.status(400).json(buildResponse('Invalid entries. Try again.'));
  }

  next();
};

// não é possível listar uma receita que não existe
const validateRecipeExistence = async (req, res, next) => {
  const { id } = req.params;
  const recipe = await model.findById('recipes', id);

  if (!recipe) {
    return res.status(404).json(buildResponse('recipe not found'));
  }
  req.recipe = recipe;

  next();
};

module.exports = {
  validateFields,
  validateRecipeExistence,
};
