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
  const query = 'UPDATE products SET name = ? WHERE id = ?';
  await connection.execute(query, [name, id]);
  const product = await findById(id);
  return camelize(product);
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?';
  const product = await connection.execute(query, [id]);
  return camelize(product);
};

module.exports = {
  findById,
  findAllProducts,
  insertNewProduct,
  updateProduct,
  deleteProduct,
};