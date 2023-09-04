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

const newRegisterSale = async (products) => {
  const saleDate = new Date();
  const querySale = 'INSERT INTO sales (date) VALUES (?)';
  const [saleResult] = await connection.execute(querySale, [saleDate]);
  const saleId = saleResult.insertId;

  const itemsSold = await Promise.all(products.map(async (product) => {
    const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)';
    await connection
      .execute(query, [saleId, product.productId, product.quantity]);
    return { productId: product.productId, quantity: product.quantity };
  }));

  return { id: saleId, itemsSold };
};

const deleteSale = async (id) => {
  const query = 'DELETE FROM sales WHERE id = ?';
  const product = await connection.execute(query, [id]);
  return camelize(product);
};

module.exports = {
  saleFindById,
  findAllSales,
  newRegisterSale,
  deleteSale,
};