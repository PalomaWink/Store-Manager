const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { saleModel } = require('../../../src/models');
const { saleList, saleListId } = require('../mocks/sale.mock');

describe('Realizando testes - SALES MODEL', function () {
  it('Recuperando a lista de vendas', async function () {
    sinon.stub(connection, 'execute').resolves([saleList]);
    const sales = await saleModel.findAllSales();
    expect(sales).to.be.deep.equal(saleList);
  });

  it('Recuperando uma venda pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([saleListId]);
    const id = 1;
    const salesId = await saleModel.saleFindById(id);
  
    expect(salesId).to.be.deep.equal(saleListId);
  });

  afterEach(function () {
    sinon.restore();
  });
});