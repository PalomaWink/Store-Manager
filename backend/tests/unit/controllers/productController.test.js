const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

const { productList, firstProduct, returnMock } = require('../mocks/product.mock');

describe('Realizando os testes - PRODUCT CONTROLLER', function () {
  it('Retornando a lista com todos os produtos', async function () {
    sinon.stub(productsService, 'findAllProducts').resolves(returnMock);
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const result = await productsController.allProducts(res);
    console.log(result);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productList);
  });

  it('Retornando produto pesquisado por ID', async function () {
    sinon.stub(productsService, 'findByIdProducts').resolves(firstProduct);
    const req = {
      params: { id: 1 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productsController.productsId(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(firstProduct);
  });

  afterEach(function () {
    sinon.restore();
  });
});
