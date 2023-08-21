const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { registerNewProduct } = require('../mocks/product.mock');

describe('Realizando testes cadastrando novos produtos - PRODUCT MODEL', function () {
  it('É possivel cadastrar um novo produto no banco', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 2 }]);

    const products = await productsModel.insertNewProduct(registerNewProduct);

    expect(products).to.equal(2);
    expect(products).to.be.a('number');
  });

  afterEach(function () {
    sinon.restore();
  });
});