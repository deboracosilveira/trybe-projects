// const salesModel = require('../models/salesModel');

const salesModel = require('../models/salesModel');

const buildResponse = (code, message) => {
  const resp = { err: { code, message } };
  return resp;
};

// não é possível cadastrar vendas com quantidade menor ou igual a zero
const validateQuantity = (req, res, next) => {
  const [...itensSold] = req.body;
  const quantities = itensSold.map(({ quantity }) => quantity);

  if (quantities.some((item) => item <= 0)) {
    return res
      .status(422)
      .json(buildResponse('invalid_data', 'Wrong product ID or invalid quantity'));
  }

  next();
};

// não é possível cadastrar vendas com uma string no campo quantidade
const validateQuantityIsNumber = (req, res, next) => {
  const [...itensSold] = req.body;
  const quantities = itensSold.map(({ quantity }) => quantity);

  if (quantities.some((item) => isNaN(item))) {
    return res
      .status(422)
      .json(buildResponse('invalid_data', 'Wrong product ID or invalid quantity'));
  }

  next();
};

// não é possível listar uma venda que não existe
const validateIdExistence = async (req, res, next) => {
  const { id } = req.params;
  const sale = await salesModel.findById(id);

  if (!sale) {
    return res.status(404).json(buildResponse('not_found', 'Sale not found'));
  }

  req.sale = sale;

  next();
};

module.exports = {
  validateQuantity,
  validateQuantityIsNumber,
  validateIdExistence,
};
