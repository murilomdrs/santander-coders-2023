// ### Dicionários (Objetos):

// 1- Crie um objeto que represente um estudante com propriedades como nome, idade, curso e notas. Acesse e exiba essas propriedades.

/*
const estudante = {
  nome: 'ET Bilu',
  idade: 1800,
  curso: 'Buscador de conhecimento',
  nota1: 9.5,
  nota2: 9.3
};

for(let prop in estudante) {
  console.log(prop);
  console.log(`${prop} : ${estudante[prop]}`);
};
*/

// 2- Crie um dicionário que mapeie nomes de países a suas respectivas capitais. Crie uma função que receba o nome de um país e retorne a capital correspondente.

/* 
function checarCapital(pais) {
  if(pais.toLowerCase() in dicionario) {
    const capitalBuscada = dicionario[pais.toLowerCase()];
    paisMaiusculo = pais.charAt(0).toUpperCase() + pais.slice(1);
    return `A capital do país ${paisMaiusculo} é ${capitalBuscada}`;
  }
};

let dicionario = {
  brasil: 'Brasília',
  argentina: 'Buenos Aires',
  bolivia: 'La Paz',
  colombia: 'Bogotá',
  paraguai: 'Assunção',
  peru: 'Lima',
  uruguai: 'Montevidéu',
  venezuela: 'Caracas'
};

const consultaPais = prompt('Digite o nome de um país');
alert(checarCapital(consultaPais));
*/

// 3- Crie um dicionário com nomes de frutas e seus preços. Escreva uma função que calcule o preço total de uma cesta de frutas.

/* 
function valorCompra() {
  let soma = 0;
  for(let fruta in frutas) {
    soma += frutas[fruta];
  }
  return soma;
}

let frutas = {
  maca: 3,
  banana: 4,
  morango: 5,
  uva: 2,
  kiwi: 7,
  mamao: 2,
  laranja: 6
};

alert(`O valor total da cesta de frutas é R$${valorCompra()}`);
 */

// 4- Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação, etc. Crie uma função que imprima as informações do livro em um formato legível.

/*
function infoLivros(livro) {
  alert(`O livro "${livro.titulo}" foi escrito por ${livro.autor} e publicado pela editora ${livro.editora} em ${livro.anoPublicacao}, contém um total de ${livro.numeroPaginas} páginas.`);
}

const livro = {
  titulo: 'Outros jeitos de usar a boca',
  autor: 'Rupi Kaur',
  anoPublicacao: 2017,
  numeroPaginas: 208,
  editora: 'Planeta'
}

infoLivros(livro);
*/

// ### Map:

// 5- Dado um array de números, crie um novo array onde cada número seja elevado ao quadrado.

/*
let numero = [2,4,8,16,32,64];
let numeroPotencia = [];

for(item in numero) {
  const potencia = Math.pow(numero[item], 2);
  numeroPotencia.push(potencia);
}

console.log(numeroPotencia);
*/

// 6- Dado um array de palavras, crie um novo array com a primeira letra de cada palavra em maiúscula.

/*
const lista = ['santander', 'ada tech', 'javascript', 'jaque', 'desenvolvedor'];
const listaCorrigida = [];

for(let i = 0; i < lista.length; i++) {
  palavraCorrigida = lista[i][0].toUpperCase() + lista[i].substring(1);
  listaCorrigida.push(palavraCorrigida);
}

console.log(lista);
console.log(listaCorrigida);
*/

// 7- Crie um array de objetos representando produtos com propriedades como nome, preço e quantidade. Use o método map() para calcular o valor total de cada produto (preço * quantidade).

/*
let listaProdutos = [
  {nome: 'Açaí', preco: 8, quantidade: 50},
  {nome: 'Café', preco: 6, quantidade: 20},
  {nome: 'Chocolate', preco: 5, quantidade: 10}
];

let valorTotal = listaProdutos.map((produto) => {
  return produto.preco * produto.quantidade;
});

for (let i = 0; i < listaProdutos.length; i++) {
  console.log(`Produto: ${listaProdutos[i].nome}, Valor Total: R$${valorTotal[i]}`);
};
*/

// 8- Converta um array de temperaturas em graus Celsius para Fahrenheit usando a fórmula (C * 9/5) + 32.

/*
let temperaturasC = [25, 38, 40, 100, 150, -6];

let temperaturasF = temperaturasC.map((temperatura) => {
  return (temperatura * 9/5) + 32;
});

console.log(temperaturasF);
*/

// ### Reduce:

// 9- Dado um array de números, use o método reduce() para calcular a soma de todos os elementos.

/*
const numeros = [10, 25, 36, 48, 64];

const somaNumeros = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
});

console.log(somaNumeros);
*/

// 10- Crie um array de strings e use o método reduce() para concatenar todas as strings em uma única string.

/*
const citacaoLivro = ['Tudo ', 'aquilo ', 'que ', 'a ', 'nossa ', 'civilização ', 'rejeita, ', 'pisa ', 'e ', 'mija ', 'em ', 'cima ', 'serve ', 'para ', 'poesia.', '\n- Manoel ', 'de ', 'Barros.'];

console.log('Array com '+ citacaoLivro.length + ' itens.');

const citacaoCompleta = citacaoLivro.reduce((acumulador, palavra) => {
  return acumulador + palavra;
});

console.log(citacaoCompleta);
*/

// 11- Dado um array de objetos representando despesas com propriedades como valor e categoria, use o método reduce() para calcular o total de despesas de uma categoria específica.

/*
const despesasViagem = [
  {nome: 'Hotel', valor: 400},
  {nome: 'Passagem', valor: 500},
  {nome: 'Alimentação', valor: 300},
  {nome: 'Compras', valor: 600},
  {nome: 'Passagem', valor: 200},
  {nome: 'Alimentação', valor: 140}
];

const categoriaEscolhida = 'Passagem';

const despesasTotal = despesasViagem.reduce((soma, despesa) => {
  if(despesa.nome === categoriaEscolhida) {
    return soma + despesa.valor;
  };
  return soma;
}, 0);

console.log(`O valor total das despesas da categoria '${categoriaEscolhida}' é R$${despesasTotal}`);
*/

// 12- Dado um array de números, use o método reduce() para encontrar o maior número no array.

/*
const listaNumeros = [1020, 35, 45, 87, 21, 42, 130, 20];

const maiorNumero = listaNumeros.reduce((acumulador, numero) => {
  if(acumulador > numero){
    return acumulador;
  };
  return numero;
}, 0);

console.log(maiorNumero);
*/

// ### Laços de Repetiçoes
// 13- Imprima os números de 1 a 10 utilizando um loop for.

/*
for(let i = 1; i < 11; i++) {
  console.log(i);
};
*/

// 14- Imprima os números pares de 1 a 20 utilizando um loop for.

/*
for(let i = 1; i < 21; i++) {
  if(i % 2 == 0) {
    console.log(i);
  }
};
*/

// 15- Calcule a soma dos números de 1 a 50 utilizando um loop for.

/*
const numeroAlvo = 50;
let soma = 0;

for(let i = 1; i <= numeroAlvo; i++) {
  soma += i;
}

console.log(`A soma entre 1 e ${numeroAlvo} é ${soma}`);
*/

// 16- Imprima a tabuada do 7 utilizando um loop for.

/*
numeroTabuada = 7;

for(let i = 1; i <= 10; i++) {
  console.log(`${numeroTabuada} * ${i} = ${numeroTabuada * i}`)
}
*/

// 17- Escreva um programa que solicite ao usuário um número e imprima a sequência de números de 1 até o número inserido, utilizando um loop for.

/*
const numeroSelecionado = prompt('Insira um número');

for(let i = 1; i <= numeroSelecionado; i++) {
  console.log(i);
}
*/

// 18- Escreva um programa que solicite ao usuário um número e verifique se ele é primo.

/*
19- Crie um programa que gere a sequência de Fibonacci até o décimo termo. (Dica: o próximo termo é a soma dos dois termos anteriores)

20- Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.

21- Escreva um programa que imprima a seguinte série: 1, 3, 6, 10, 15, 21, ..., onde cada número é a soma dos números naturais consecutivos.

22- Crie um programa que encontre e imprima todos os números perfeitos de 1 a 1000. Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.

23- Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100, e o jogador deve adivinhar qual é esse número. O jogo deve fornecer dicas informando se o número a ser adivinhado é maior ou menor do que o palpite do jogador, e o jogo deve continuar até que o jogador acerte o número.

24- Crie um programa que gere a sequência de números de Fibonacci usando um loop while até que o próximo termo seja maior que 1000.

25- Escreva um programa que calcule a média de uma lista de números. O usuário deve fornecer quantos números deseja inserir, e em seguida, inserir os números.

26- Escreva um programa que peça ao usuário para adivinhar um número secreto entre 1 e 100. O programa deve fornecer dicas como "maior" ou "menor" até que o jogador adivinhe corretamente.

27- Crie um programa que gere a sequência de números primos até um número fornecido pelo usuário.

28- Escreva um código JavaScript que utilize um laço de repetição while para imprimir os números pares de 0 a 10.

29- Escreva um código JavaScript que solicite ao usuário um número e utilize um laço de repetição do-while para verificar se o número inserido é uma potência de 2.

30- Escreva um código JavaScript que utilize um laço de repetição while para calcular a soma dos números de 1 a 100 e exiba o resultado.

### Condicionais

31- Verificação de vogal ou consoante

Peça ao usuário para digitar uma letra.
Use uma estrutura condicional para verificar se a letra é uma vogal ou uma consoante.
Exiba uma mensagem indicando se a letra é uma vogal ou consoante.

32- Calculadora simples

Peça ao usuário para digitar dois números e uma operação matemática (+, -, *, /).
Use uma estrutura condicional para realizar a operação selecionada nos números dados.
Exiba o resultado da operação.

33- Verificação de número primo

Peça ao usuário para digitar um número.
Use uma estrutura condicional para verificar se o número é primo (divisível apenas por 1 e por ele mesmo).
Exiba uma mensagem indicando se o número é primo ou não.

34- Conversão de temperatura

Peça ao usuário para digitar uma temperatura em graus Celsius.
Use uma estrutura condicional para converter a temperatura para Fahrenheit ou Kelvin, de acordo com a escolha do usuário.
Exiba o resultado da conversão.

35- Dia da semana por extenso

Peça ao usuário para digitar um número de 1 a 7 representando um dia da semana.
Use uma estrutura condicional switch para exibir o nome completo do dia da semana correspondente ao número digitado.

36- Verificação de ano bissexto

Peça ao usuário para digitar um ano.
Use uma estrutura condicional para verificar se o ano é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400).
Exiba uma mensagem indicando se o ano é bissexto ou não.

37- Contador de vogais e consoantes

Peça ao usuário para digitar uma palavra ou frase.
Use uma estrutura condicional para contar o número de vogais e consoantes na entrada.
Exiba os resultados separadamente.

38- Verificação de número positivo, negativo ou zero

Peça ao usuário para digitar um número.
Use uma estrutura condicional para verificar se o número é positivo, negativo ou zero.
Exiba uma mensagem indicando a natureza do número.

39- Sistema de bilhete de cinema

Peça ao usuário para digitar sua idade e se tem cartão de estudante (responda com "sim" ou "não").
Use uma estrutura condicional para determinar o preço do bilhete de cinema de acordo com as regras: menores de 18 anos pagam $5, estudantes pagam $8 e os demais pagam $10.
Exiba o preço do bilhete.

40- Verificação de palíndromo

Peça ao usuário para digitar uma palavra ou frase.
Use uma estrutura condicional para verificar se a entrada é um palíndromo (lê-se igual de trás para frente e de frente para trás).
Exiba uma mensagem indicando se a entrada é um palíndromo ou não.
*/