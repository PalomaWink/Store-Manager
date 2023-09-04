const express = require('express');
const { productsController, salesController } = require('./controllers');
const validationRegister = require('./middlewares/validationRegister');
const validateRegisterNewSale = require('./middlewares/validationRegisterSale');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.get('/products', productsController.allProducts);
app.get('/products/:id', productsController.productsId);
app.get('/sales', salesController.allSales);
app.get('/sales/:id', salesController.saleId);

app.post('/products', validationRegister, productsController.newProduct);
app.post('/sales', validateRegisterNewSale, salesController.registerSale);

app.put('/products/:id', validationRegister, productsController.productUpdate);

app.delete('/products/:id', productsController.deleteById);
app.delete('/sales/:id', salesController.deleteById);

module.exports = app;
