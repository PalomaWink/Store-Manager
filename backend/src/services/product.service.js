const { productsModel } = require('../models');

const findByIdProducts = async (id) => {
  const products = await productsModel.findById(id);
  if (!products) {
    return { status: 404, data: { message: 'Product not found' } };
  }
  return { status: 200, data: products };
};

module.exports = {
    findByIdProducts,
};