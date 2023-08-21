const { expect } = require('chai');
const sinon = require('sinon');
const { saleService } = require('../../../src/services');
const { saleModel } = require('../../../src/models');
const { newSaleMock, newSaleMockWithoutId } = require('../mocks/sale.mock');

describe('Realizando testes para cadastrar novo produto - NEW PRODUCT SERVICE', function () {
  it('É possivel cadastrar um novo produto', async function () {
    sinon.stub(saleModel, 'newRegisterSale').resolves(newSaleMock);
    const responseService = await saleService.registerNewSale(newSaleMockWithoutId);
   
    expect(responseService.data).to.deep.equal(newSaleMock);
    expect(responseService.status).to.equal(201);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});