const { saleModel } = require('../models');

const findByIdSales = async (id) => {
  const sales = await saleModel.saleFindById(id);
  if (sales.length === 0) {
    return { status: 404, data: { message: 'Sale not found' } };
  }
  return { status: 200, data: sales };
};
  
const findAllSales = async () => {
  const allSales = await saleModel.findAllSales();
  return { status: 200, data: allSales };
};

const registerNewSale = async (products) => {
  const newSales = await saleModel.newRegisterSale(products);
  return { status: 201, data: newSales };
};

const deleteSale = async (id) => {
  const result = await saleModel.deleteSale(id);
  return { status: 204, data: result };
};
  
module.exports = {
  findByIdSales,
  findAllSales,
  registerNewSale,
  deleteSale,
};