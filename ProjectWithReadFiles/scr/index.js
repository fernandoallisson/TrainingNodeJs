const readline = require('readline-sync');
const { writeNewObject } = require('./utils/fsUtils');

async function main() {
  const nome = readline.question('Qual é o nome do usuário? ');
  const email = readline.question('Qual é o email do usuário? ');
  const idade = readline.question('Qual é a idade do usuário? ');
  const isAtivo = readline.question('O usuário está ativo? ');
  const enderecosTipo = readline.question('Qual é o tipo do seu endereço? ');
  const cidade = readline.question('Qual é a sua cidade? ');
  const estado = readline.question('Qual é o seu estado? ');

  const newObject = { nome, email, idade, isAtivo, Endereço: { enderecosTipo, cidade, estado } };

  writeNewObject(newObject);
  console.log('Pessoa Adicionada!');
}

main();