const fs = require('fs').promises;
const readlyne = require('readline-sync')

async function main() {
  try {
    const key = readlyne.question("Qual a chave a ser escrita no aquivo?")
    await fs.writeFile('./meu-arquivo.txt', key);
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()