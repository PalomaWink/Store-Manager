// const { expect } = require('chai');

/* const chaiHttp = require('chai-http');

chai.use(chaiHttp);
Esse plugin ao chai, me permite consumir o server em express por meio dele, sem que haja a necessidade de subirmos a API manualmente.
 */

/* const { funcao que eu quero testar } = require('...') */

// Exemplo de como começar um teste 
/* describe('A função do requisito 1', () => {
    it('Retorna um array', async () => {
        const test = await 'função que eu quero testar'();

        expect(test).to.be.equal([])
    })
}) */

// Exemplo de describe usando o chai-http
/* describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
        const response = await chai
            .request(app)
            .get('/chocolates');
    });
}); 
    expect(response).to.deep.equal garante que todas as informações dentro do objeto retornado são as mesmas do objeto esperado
    expect(response.body.chocolates).to.deep.equal(output);
*/