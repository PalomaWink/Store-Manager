const camelize = require('camelize');
const connection = require('./connection');

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return camelize(product);
};

const findAllProducts = async () => {
  const [product] = await connection.execute(
    'SELECT * FROM products',
  );
  return camelize(product);
};

module.exports = {
  findById,
  findAllProducts,
};