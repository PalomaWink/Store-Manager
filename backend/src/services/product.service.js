const { productsModel } = require('../models');

const findByIdProducts = async (id) => {
  const products = await productsModel.findById(id);
  if (!products) {
    return { status: 404, data: { message: 'Product not found' } };
  }
  return { status: 200, data: products };
};

const findAllProducts = async () => {
  const allProducts = await productsModel.findAllProducts();
  return { status: 200, data: allProducts };
};

const registerNewProduct = async (product) => {
  const registerAProduct = await productsModel.insertNewProduct(product);
  return { status: 201, data: { id: registerAProduct, ...product } };
};

const updateProducts = async (name, id) => {
  const updateProduct = await productsModel.updateProduct(name, id);
  return { status: 200, data: updateProduct };
};

module.exports = {
    findByIdProducts,
    findAllProducts,
    registerNewProduct,
    updateProducts,
};