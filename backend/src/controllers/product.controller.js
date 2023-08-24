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

const productUpdate = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  console.log(id);
  console.log(name);
 
  const result = await productsService.findByIdProducts(id);
  console.log(result);

  if (result.data.id !== Number(id)) {
    return res.status(404).json({ message: 'Product not found' });
  }
  const { data, status } = await productsService.updateProducts(name, id);
  console.log(data);
  console.log(status);
  return res.status(status).json(data);
};

module.exports = {
  productsId,
  allProducts,
  newProduct,
  productUpdate,
};
