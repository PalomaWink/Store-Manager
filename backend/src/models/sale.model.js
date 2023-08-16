const camelize = require('camelize');
const connection = require('./connection');

const saleFindById = async (saleId) => {
  const [sale] = await connection.execute(
   `SELECT date, sales_products.product_id as "productId", sales_products.quantity
   FROM sales INNER JOIN sales_products ON sales.id = sales_products.sale_id
   WHERE sale_id = ?`,
    [saleId],
  );
  return camelize(sale);
};

const findAllSales = async () => {
  const [sale] = await connection.execute(
    `SELECT
      id as "saleId", 
      date, 
      sales_products.product_id as "productId", 
      sales_products.quantity
    FROM sales
    INNER JOIN sales_products ON id = sales_products.sale_id`,
  );
  return camelize(sale);
};

module.exports = {
  saleFindById,
  findAllSales,
};