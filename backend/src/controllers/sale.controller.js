const { saleService } = require('../services');

const saleId = async (req, res) => {
  const { id } = req.params;
  const { data, status } = await saleService.findByIdSales(id);
  return res.status(status).json(data);
};

const allSales = async (_req, res) => {
  const { data, status } = await saleService.findAllSales();
  return res.status(status).json(data);
};

module.exports = {
  saleId,
  allSales,
};