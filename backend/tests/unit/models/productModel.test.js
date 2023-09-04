const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { productList, firstProduct, productListWithDelete } = require('../mocks/product.mock');

describe('Realizando testes - PRODUCT MODEL', function () {
  it('Recuperando lista de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productList]);
    const products = await productsModel.findAllProducts();

    expect(products).to.be.deep.equal(productList);
  });

  it('Recuperando produto por id', async function () {
    sinon.stub(connection, 'execute').resolves([productList]);
    const inputData = 1;
    const productId = await productsModel.findById(inputData);
    expect(productId).to.be.an('object');
    expect(productId).to.be.deep.equal(firstProduct);
  });

  it('Verificando se é possivel deletar um produto por id', async function () {
    const executeStub = sinon.stub(connection, 'execute').resolves([productListWithDelete]);
    const inputData = 1;
    const product = await productsModel.deleteProduct(inputData);
    expect(executeStub.firstCall.args[0]).to.equal('DELETE FROM products WHERE id = ?');
    expect(product).to.be.deep.equal([productListWithDelete]);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});