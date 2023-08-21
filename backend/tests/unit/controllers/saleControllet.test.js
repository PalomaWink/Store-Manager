const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { saleService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { saleList, returnMockSaleList, saleListId, returnMockId } = require('../mocks/sale.mock');

describe('Realizando testes - SALE CONTROLLER', function () {
  it('Retorna a lista de produtos', async function () {
    sinon.stub(saleService, 'findAllSales').resolves(returnMockSaleList);
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const req = {};
    const result = await salesController.allSales(req, res);
    console.log(result);
    expect(res.json).to.have.been.calledWith(saleList);
    expect(res.status).to.have.been.calledWith(200);
  });

  it('Retorna produto pesquisado por ID', async function () {
    sinon.stub(saleService, 'findByIdSales').resolves(returnMockId);
    const req = {
      params: { id: 1 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await salesController.saleId(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleListId);
  });

  afterEach(function () {
    sinon.restore();
  });
});