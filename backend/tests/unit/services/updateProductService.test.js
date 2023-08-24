const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');

describe('Realizando testes para atualização de um produto - UPDATE SERVICE', function () {
  it('É possivel cadastrar um novo produto', async function () {
    sinon.stub(productsModel, 'updateProduct').resolves({ id: 1, name: 'Capa do Super-Homem' });
    const responseService = await productsService.updateProducts(1, 'Capa do Super-Homem');

    expect(responseService.data).to.deep.equal({ id: 1, name: 'Capa do Super-Homem' });
    expect(responseService.status).to.equal(200);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});