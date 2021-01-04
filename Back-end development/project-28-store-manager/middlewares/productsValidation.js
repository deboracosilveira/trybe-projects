const productsModel = require('../models/productsModel');

const buildResponse = (code, message) => {
  const resp = { err: { code, message } };
  return resp;
};

// não é possível criar um produto com o nome menor que 5 caracteres
const validateNameLength = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 5) {
    return res
      .status(422)
      .json(buildResponse('invalid_data', '"name" length must be at least 5 characters long'));
  }
  next();
};

// não é possível criar um produto com o mesmo nome de outro já existente
const validateNameExistence = async (req, res, next) => {
  const { name } = req.body;
  const product = await productsModel.findByName(name);

  if (product) {
    return res.status(422).json(buildResponse('invalid_data', 'Product already exists'));
  }

  next();
};

// não é possível criar um produto com quantidade menor ou igual a zero
const validateQuantity = (req, res, next) => {
  const { quantity } = req.body;
  if (quantity <= 0) {
    return res
      .status(422)
      .json(buildResponse('invalid_data', '"quantity" must be larger than or equal to 1'));
  }

  next();
};

// não é possível criar um produto com uma string no campo quantidade
const validateQuantityIsNumber = (req, res, next) => {
  const { quantity } = req.body;
  if (isNaN(quantity)) {
    return res.status(422).json(buildResponse('invalid_data', '"quantity" must be a number'));
  }

  next();
};

// não é possível listar um produto que não existe
const validateIdExistence = async (req, res, next) => {
  const { id } = req.params;
  const product = await productsModel.findById(id);

  if (!product) {
    return res.status(422).json(buildResponse('invalid_data', 'Wrong id format'));
  }

  req.product = product;

  next();
};

module.exports = {
  validateNameLength,
  validateNameExistence,
  validateQuantity,
  validateQuantityIsNumber,
  validateIdExistence,
};
