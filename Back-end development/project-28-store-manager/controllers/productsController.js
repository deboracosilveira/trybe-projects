const express = require('express');
const productsValidations = require('../middlewares/productsValidation');
const productsModel = require('../models/productsModel');

const router = express.Router();

// Add new product
router.post(
  '/',
  productsValidations.validateNameLength,
  productsValidations.validateNameExistence,
  productsValidations.validateQuantity,
  productsValidations.validateQuantityIsNumber,
  async (req, res) => {
    try {
      const { name, quantity } = req.body;
      const product = await productsModel.addProduct(name, quantity);

      res.status(201).json(product);
    } catch (_e) {
      res.status(501).json({ message: 'Failed to register the product!' });
    }
  },
);

// show all products
router.get('/', async (req, res) => {
  const products = await productsModel.findAll();

  res.status(200).json({ products });
});

// show product
router.get('/:id', productsValidations.validateIdExistence, async (req, res) =>
  res.status(200).json(req.product),
);

// update product
router.put(
  '/:id',
  productsValidations.validateNameLength,
  productsValidations.validateQuantity,
  productsValidations.validateQuantityIsNumber,
  async (req, res) => {
    const { name, quantity } = req.body;
    const { id } = req.params;
    await productsModel.updateProduct(id, name, quantity);

    const product = await productsModel.findById(id);

    res.status(200).json(product);
  },
);

// delete product
router.delete('/:id', productsValidations.validateIdExistence, async (req, res) => {
  const { id } = req.params;
  await productsModel.deleteProduct(id);

  res.status(200).json(req.product);
});

module.exports = router;
