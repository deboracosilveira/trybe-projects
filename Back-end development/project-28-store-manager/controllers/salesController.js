const express = require('express');
const salesValidations = require('../middlewares/salesValidation');
const salesModel = require('../models/salesModel');
const quantityService = require('../services/quantityService');

const router = express.Router();

// Add new sale
router.post(
  '/',
  salesValidations.validateQuantity,
  salesValidations.validateQuantityIsNumber,
  async (req, res) => {
    const [...itensSold] = req.body;
    const sales = await salesModel.addSale(itensSold);
    await quantityService.updateProductQuantity(req.method, itensSold);
    res.status(200).json(sales);
  },
);

// show all sales
router.get('/', async (req, res) => {
  const sales = await salesModel.findAll();

  res.status(200).json({ sales });
});

// show sale
router.get('/:id', salesValidations.validateIdExistence, async (req, res) =>
  res.status(200).json(req.sale),
);

// update sale
router.put(
  '/:id',
  salesValidations.validateQuantity,
  salesValidations.validateQuantityIsNumber,
  salesValidations.validateIdExistence,
  async (req, res) => {
    const { id } = req.params;
    const itensSold = req.body;
    const result = await salesModel.updateSale(id, itensSold);

    res.status(200).json(result);
  },
);

// delete sale
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const sale = await salesModel.findById(id);

  if (!sale) {
    res.status(422).json({ err: { code: 'invalid_data', message: 'Wrong sale ID format' } });
    return null;
  }
  await salesModel.deleteSale(id);
  await quantityService.updateProductQuantity(req.method, sale.itensSold);
  res.status(200).json(sale);
});

module.exports = router;
