const productsModel = require('../models/productsModel');

const updateQuantity = async (action, productId, quantity) => {
  const product = await productsModel.findById(productId);
  if (!product) return;
  let newQuantity;
  if (action === 'POST') {
    newQuantity = product.quantity - quantity;
  }
  if (action === 'DELETE') {
    newQuantity = product.quantity + quantity;
  }

  await productsModel.updateProduct(productId, product.name, newQuantity);
};

const updateProductQuantity = async (action, itensSold) => {
  if (itensSold === {}) return;
  const promisses = itensSold.map(({ productId, quantity }) =>
    updateQuantity(action, productId, quantity),
  );

  await Promise.all(promisses);
};

module.exports = {
  updateProductQuantity,
};
