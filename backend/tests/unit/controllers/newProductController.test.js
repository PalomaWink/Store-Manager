const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

describe('Realizando testes cadastrando um novo produto - PRODUCT MODEL', function () {
  it('É possivel cadastrar um novo produto no banco', async function () {
    const test = {
      id: 4,
      name: 'Fishbones',
    };
    sinon.stub(productsService, 'registerNewProduct').resolves({ data: test, status: 201 });
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const req = {
      body: {
        id: 4,
        name: 'Fishbones',
      },
    };
    await productsController.newProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(test);
  });

  afterEach(function () {
    sinon.restore();
  });
});