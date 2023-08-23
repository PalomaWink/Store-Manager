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

const insertNewProduct = async (product) => {
  const { name } = product;
  const query = 'INSERT INTO products (name) VALUE (?)';
  const [{ insertId }] = await connection.execute(query, [name]);
  return camelize(insertId);
};

const updateProduct = async (name, id) => {
  // const { id, name } = product;
  const query = 'UPDATE products SET name = ? WHERE id = ?';
  const result = await connection.execute(query, [name, id]);
  const resultTest = result[0];
  console.log(result);
  return camelize(resultTest);
};

module.exports = {
  findById,
  findAllProducts,
  insertNewProduct,
  updateProduct,
};