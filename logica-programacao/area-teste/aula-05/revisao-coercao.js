// coerção implícita em operações aritméticas

const x = 5 + '10';
const y = 5 - '10';

console.log(x);
console.log(y);

// coerção implícita em concatenação de strings

const nome = 'Murilo';
const mensagem = 'Olá, ' + nome;
console.log(mensagem);

// coerção implícita em comparações

const a = 10;
const b = '5';

console.log(a < 5);

// coerção explícita que nós forçamos

const stringNumero = '10';
const numero = Number(stringNumero);
console.log(numero);
console.log(stringNumero);