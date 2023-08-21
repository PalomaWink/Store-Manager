const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { saleService, productsService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');

const { newSaleMockWithoutId, newSaleMock } = require('../mocks/sale.mock');

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

  afterEach(function () {
    sinon.restore();
  });
});