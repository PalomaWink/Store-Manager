const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect, assert } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

const { productList, firstProduct, returnMock, returnMockId, productListWithDelete } = require('../mocks/product.mock');

describe('Realizando os testes - PRODUCT CONTROLLER', function () {
  it('Retornando a lista com todos os produtos', async function () {
    sinon.stub(productsService, 'findAllProducts').resolves(returnMock);
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const req = {};
    await productsController.allProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productList);
  });

  it('Retornando produto pesquisado por ID', async function () {
    sinon.stub(productsService, 'findByIdProducts').resolves(returnMockId);
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

  it('Retornando erro caso produto não seja encontrado', async function () {
    const result = { status: 404, data: { message: 'Product not found' } };
    sinon.stub(productsService, 'findByIdProducts').resolves(result);

    const req = {
      params: { id: 20 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
  
    await productsController.productsId(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('Retorna 204 quando produto foi deletado com sucesso', async function () {
    const stubId = sinon.stub(productsService, 'findByIdProducts').resolves({ status: 200, data: { id: 1, name: 'Martelo de Thor' } });
    sinon.stub(productsService, 'deleteProducts').resolves({ status: 204 });
    const req = {
      params: { id: 1 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
  
    await productsController.deleteById(req, res);
    
    assert.isTrue(stubId.calledOnce);
    assert.isTrue(res.status.calledWith(204));
  });

  it('Retorna erro quando id passado por parâmetro para deletar um produto não é localizado', async function () {
    const stubId = sinon.stub(productsService, 'findByIdProducts').resolves({ status: 404, data: { message: 'Product not found' } });
    sinon.stub(productsService, 'deleteProducts').resolves([productListWithDelete]);
    const req = {
      params: { id: 1 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
  
    const product = await productsController.deleteById(req, res);
    console.log(product);
    
    assert.isTrue(stubId.calledOnce);
    assert.isTrue(res.status.calledWith(404));
    assert.isTrue(res.json.calledWith({ message: 'Product not found' }));
  });

  afterEach(function () {
    sinon.restore();
  });
});
