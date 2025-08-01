const { expect } = require('chai');
const ultils = require('../../src/utils');

describe('Tests on Ultils Funcion', () => {
  it('Retorna que é um Array de dados quando chamado a função ReadData', async () => {
    const data = await ultils.readData();

    expect(data).to.be.instanceOf(Object);
  });

  // it('Retorna um array de dados concretos quando chama a função ReadData', async () => {
  //   const data = await ultils.readData(); 
    
  // });
});