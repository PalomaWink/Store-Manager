const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

describe('Realizando testes atualizando um produto - UPDATE CONTROLLER', function () {
  it('É possivel atualizar um novo produto no banco', async function () {
    sinon.stub(productsService, 'findByIdProducts').resolves({ status: 200, data: { id: 1, name: 'Capa do Super-Homem' } });
    sinon.stub(productsService, 'updateProducts').resolves({ status: 200, data: { id: 1, name: 'Capa do Super-Homem' } });
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const req = {
      body: { name: 'Capa do Super-Homem' },
      params: { id: 1 },
    };
    await productsController.productUpdate(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ id: 1, name: 'Capa do Super-Homem' });
  });

  afterEach(function () {
    sinon.restore();
  });
});