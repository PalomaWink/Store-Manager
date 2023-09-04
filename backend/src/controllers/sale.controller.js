const { saleService, productsService } = require('../services');

const saleId = async (req, res) => {
  const { id } = req.params;
  const { data, status } = await saleService.findByIdSales(id);
  return res.status(status).json(data);
};

const allSales = async (_req, res) => {
  const { data, status } = await saleService.findAllSales();
  return res.status(status).json(data);
};

const registerSale = async (req, res) => {
  const resultProduct = req.body.map(async (item) => {
      const result = await productsService.findByIdProducts(item.productId);
      return result.status;
    });
    const result = await Promise.all(resultProduct);
  if (result.every((product) => product === 200)) {
    const { data, status } = await saleService.registerNewSale(req.body);
    return res.status(status).json(data);
  }
  
  return res.status(404).json({ message: 'Product not found' });
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await saleService.findByIdSales(id);

  if (result.status === 404) {
    return res.status(result.status).json(result.data);
  }
  const { status, data } = await saleService.deleteSale(id);
  return res.status(status).json(data);
};

module.exports = {
  saleId,
  allSales,
  registerSale,
  deleteById,
};