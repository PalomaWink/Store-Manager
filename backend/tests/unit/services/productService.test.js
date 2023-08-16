const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');
const { productList, firstProduct } = require('../mocks/product.mock');

describe('Realizando testes - PRODUCT SERVICE', function () {
  it('Retorna a lista de produtos', async function () {
    sinon.stub(productsModel, 'findAllProducts').resolves(productList);
    const response = await productsService.findAllProducts();
    expect(response.status).to.equal(200);
    expect(response.data).to.deep.equal(productList);
  });

  it('Recuperando produto por id', async function () {
    sinon.stub(productsModel, 'findById').resolves(firstProduct);
    const id = 1;
    const response = await productsService.findByIdProducts(id);
    expect(response.data).to.deep.equal(firstProduct);
    expect(response.status).to.equal(200);
  });

  it('Informa mensagem de erro quando ID é inexistente', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);
    const id = 5;
    const response = await productsService.findByIdProducts(id);
    expect(response.data).to.deep.equal({ message: 'Product not found' });
    expect(response.status).to.equal(404);
  });

  afterEach(function () {
    sinon.restore();
  });
});