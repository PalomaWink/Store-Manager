const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { saleModel } = require('../../../src/models');

describe('Realizando testes cadastrando nova venda - SALES MODEL', function () {
  it('É possivel cadastrar uma nova venda no banco', async function () {
    const items = [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];
    const executeStub = sinon.stub(connection, 'execute').resolves(items);
    const registerSale = await saleModel.newRegisterSale(items);

    expect(registerSale.itemsSold).to.deep.equal(items);
    expect(executeStub.firstCall.args[0]).to.equal('INSERT INTO sales (date) VALUES (?)');
  });

  afterEach(function () {
    sinon.restore();
  });
});