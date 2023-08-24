const { expect } = require('chai');
const sinon = require('sinon');
const validateRegisterNewSale = require('../../src/middlewares/validationRegisterSale');

describe('Testando Middleware "validateRegisterNewSale"', function () {
  it('Testando validacao do middleware para fazer um PUT', function () {
    const next = sinon.stub().returns();
    const req = {
      body: [
        {
          productId: 1,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ], 
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    validateRegisterNewSale(req, res, next);
    expect(next).to.have.been.calledWith();
  });

  it('Testando validacao do middleware caso o campo "quantidade" não seja informado em um dos itens', function () {
    const next = sinon.stub().returns();
    const req = {
      body: [
        {
          productId: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ], 
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    validateRegisterNewSale(req, res, next);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" is required' });
    expect(res.status).to.have.been.calledWith(400);
  });

  it('Testando validacao do middleware caso o campo "quantidade" seja menor ou igual a 1', function () {
    const next = sinon.stub().returns();
    const req = {
      body: [
        {
          productId: 1,
          quantity: 0,
        },
        {
          productId: 2,
          quantity: -5,
        },
      ], 
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    validateRegisterNewSale(req, res, next);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
    expect(res.status).to.have.been.calledWith(422);
  });

  it('Testando validacao do middleware caso o id dos produtos nao seja informado', function () {
    const next = sinon.stub().returns();
    const req = {
      body: [
        {
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ], 
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    validateRegisterNewSale(req, res, next);
    expect(res.json).to.have.been.calledWith({ message: '"productId" is required' });
    expect(res.status).to.have.been.calledWith(400);
  });
});
