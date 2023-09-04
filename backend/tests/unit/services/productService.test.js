const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');
const { productList, firstProduct, productListWithDelete } = require('../mocks/product.mock');

describe('Realizando testes - PRODUCT SERVICE', function () {
  it('Retorna a lista de produtos', async function () {
    sinon.stub(productsModel, 'findAllProducts').resolves(productList);
    const responseService = await productsService.findAllProducts();
    expect(responseService.status).to.equal(200);
    expect(responseService.data).to.deep.equal(productList);
  });

  it('Recuperando produto por id', async function () {
    sinon.stub(productsModel, 'findById').resolves(firstProduct);
    const id = 1;
    const responseService = await productsService.findByIdProducts(id);
    expect(responseService.data).to.deep.equal(firstProduct);
    expect(responseService.status).to.equal(200);
  });

  it('Informa mensagem de erro quando ID é inexistente', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);
    const id = 5;
    const responseService = await productsService.findByIdProducts(id);
    expect(responseService.data).to.deep.equal({ message: 'Product not found' });
    expect(responseService.status).to.equal(404);
  });

  it('Retorna status 204, quando produto foi deletado com sucesso', async function () {
    sinon.stub(productsModel, 'deleteProduct').resolves([productListWithDelete]);
    const id = 1;
    const response = await productsService.deleteProducts(id);
    expect(response.status).to.equal(204);
  });

  afterEach(function () {
    sinon.restore();
  });
});