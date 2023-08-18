const { expect } = require('chai');
const sinon = require('sinon');
const validationNewProduct = require('../../src/middlewares/validationRegister');

describe('Testando Middleware', function () {
  it('Testando validacao do middleware para fazer um post', function () {
    const next = sinon.stub().returns();
    const req = {
      body: { name: 'Fishbones' }, 
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    validationNewProduct(req, res, next);
    expect(next).to.have.been.calledWith();
  });
  it('Testando validacao do middleware caso name seja vazio', function () {
    const next = sinon.stub().returns();
    const req = {
      body: { name: '' }, 
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    validationNewProduct(req, res, next);
    expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
    expect(res.status).to.have.been.calledWith(400);
  });
  it('Testando validacao do middleware caso o nome tenha menos de 5 letras', function () {
    const next = sinon.stub().returns();
    const req = {
      body: { name: 'hh' }, 
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    validationNewProduct(req, res, next);
    expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
    expect(res.status).to.have.been.calledWith(422);
  });
});
