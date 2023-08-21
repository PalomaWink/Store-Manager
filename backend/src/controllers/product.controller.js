const { productsService } = require('../services');

const productsId = async (req, res) => {
  const { id } = req.params;
  const { data, status } = await productsService.findByIdProducts(id);
  return res.status(status).json(data);
};

const allProducts = async (_req, res) => {
  const { data, status } = await productsService.findAllProducts();
  return res.status(status).json(data);
};

const newProduct = async (req, res) => {
  const { data, status } = await productsService.registerNewProduct(req.body);
  return res.status(status).json(data);
};

module.exports = {
  productsId,
  allProducts,
  newProduct,
};
