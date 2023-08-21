const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');
const { registerNewProduct } = require('../mocks/product.mock');

describe('Realizando testes para cadastrar novo produto - NEW PRODUCT SERVICE', function () {
  it('É possivel cadastrar um novo produto', async function () {
    sinon.stub(productsModel, 'insertNewProduct').resolves(2);
    const responseService = await productsService.registerNewProduct(registerNewProduct);

    expect(responseService.data).to.deep.equal({ id: 2, name: 'Fishbones' });
    expect(responseService.status).to.equal(201);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});