/* eslint-disable max-lines-per-function */
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

const mockData = JSON.stringify([
  {
    id: 1,
    movie: 'Avatar',
    price: 5,
  },
  {
    id: 4,
    movie: 'Quebrando a Banca',
    price: 5,
  },
  {
    id: 1,
    movie: 'Avatar',
    price: 5,
  },
]);

  afterEach(() => {
    sinon.restore();
  });

describe('Testando as funções do Utils', () => {
  sinon.stub(fs.promises, 'readFile')
    .resolves(mockData);
  describe('Usando o Método Get em /movies', () => {
    it('Retorna Status 200', async () => {
      const data = await chai
        .request(app)
        .get('/movies');

      expect(data.status).to.be.equals(200);
    });
  });
  describe('Usando o método Post em /movie', () => { 
    it('Deve retornar ao fazer um post as informações do filme criado', async () => {
      sinon.stub(fs.promises, 'writeFile').resolves();
      const response = (await chai.request(app).post('/movies').send(mockData[0]));

      expect(response.status).to.be.equal(201);
      expect(response.body).to.haveOwnProperty('movie');
      expect(response.body.movie).to.haveOwnProperty('id');
    });
  });
});
