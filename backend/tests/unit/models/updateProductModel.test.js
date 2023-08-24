const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { updateProduct } = require('../mocks/product.mock');

describe('Realizando testes para atualização de produtos - UPDATE MODEL', function () {
  it('É possivel atualizar um produto no banco', async function () {
    const executeStub = sinon.stub(connection, 'execute').resolves([[{ id: 1, name: 'Capa do Super-Homem' }]]);
    sinon.stub(productsModel, 'findById').resolves(1);

    const products = await productsModel.updateProduct(1, { name: 'Capa do Super-Homem' });

    expect(products).to.deep.equal(updateProduct);
    expect(executeStub.firstCall.args[0]).to.equal('UPDATE products SET name = ? WHERE id = ?');
  });

  afterEach(function () {
    sinon.restore();
  });
});