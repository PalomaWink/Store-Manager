const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect, assert } = chai;
chai.use(sinonChai);

const { saleService, productsService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');

const { newSaleMockWithoutId, newSaleMock, newSaleMockWithError } = require('../mocks/sale.mock');

describe('Realizando testes cadastrando uma nova venda - SALE CONTROLLER', function () {
  it('É possivel cadastrar uma nova venda no banco', async function () {
    sinon.stub(saleService, 'registerNewSale').resolves({ data: newSaleMock, status: 201 });
    sinon.stub(productsService, 'findByIdProducts').resolves({ data: {}, status: 200 });
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const req = {
      body: newSaleMockWithoutId,
    };
    await salesController.registerSale(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newSaleMock);
  });

  it('Retorna falso quando todos os produtos não são 200', function () {
    const resultOne = [200, 200, 500];

    assert.isFalse(resultOne.every((product) => product === 200));
    assert.isTrue(resultOne.some((product) => product === 200));
    expect(resultOne.every((product) => product === 200)).to.equal(false);
    expect(resultOne.some((product) => product === 200)).to.equal(true);
  });

  it('Retorna true quando todos os produtos são 200', function () {
    const resultOne = [200, 200, 200];
    
    assert.isTrue(resultOne.every((product) => product === 200));
    expect(resultOne.every((product) => product === 200)).to.equal(true);
    assert.isTrue(resultOne.some((product) => product === 200));
    expect(resultOne.some((product) => product === 200)).to.equal(true);
  });

  it('Retorna erro quando o produto não é encontrado', async function () {
    sinon.stub(saleService, 'registerNewSale').resolves({ data: newSaleMockWithError, status: 404 });
    sinon.stub(productsService, 'findByIdProducts').resolves({ data: { message: 'Product not found' }, status: 404 });
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const req = {
      body: [
        {
          productId: 20,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };
    await salesController.registerSale(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  afterEach(function () {
    sinon.restore();
  });
});