const { expect } = require('chai');
const sinon = require('sinon');
const { saleModel } = require('../../../src/models');
const { saleService } = require('../../../src/services');
const { saleList, returnMockId } = require('../mocks/sale.mock');

describe('Realizando testes - SALES SERVICE', function () {
  it('Retorna a lista de vendas', async function () {
    sinon.stub(saleModel, 'findAllSales').resolves(saleList);
    const responseServiceSale = await saleService.findAllSales();
    expect(responseServiceSale.status).to.equal(200);
    expect(responseServiceSale.data).to.deep.equal(saleList);
  });

  it('Recupera as vendas por id informado', async function () {
    sinon.stub(saleModel, 'saleFindById').resolves(returnMockId);
    const id = 1;
    const responseServiceSale = await saleService.findByIdSales(id);

    expect(responseServiceSale.data).to.deep.equal(returnMockId);
    expect(responseServiceSale.status).to.deep.equal(200);
  });

  it('Informa mensagem de erro quando o ID é inexistente', async function () {
    sinon.stub(saleModel, 'saleFindById').resolves([]);
    const id = 5;
    const responseServiceSale = await saleService.findByIdSales(id);
    
    expect(responseServiceSale.data).to.deep.equal({ message: 'Sale not found' });
    expect(responseServiceSale.status).to.equal(404);
  });

  afterEach(function () {
    sinon.restore();
  });
});
