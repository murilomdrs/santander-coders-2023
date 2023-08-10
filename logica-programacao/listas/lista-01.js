// Operadores:

// 1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.

/*
let largura = prompt('Insira a largura do retângulo em cm:');
let comprimento = prompt('Insira o comprimento do retângulo em cm:');
let areaRetangulo = largura * comprimento;

alert(`A área do retângulo é ${areaRetangulo} cm²`);
*/

// 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).

/*
let numero = prompt('Insira um número:');

if(numero % 2 == 0) {
  alert('O número informado é PAR');
} else {
  alert('O número informado é ÍMPAR');
}
*/

// 3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".

/*
function palavraJavascript(palavra) {
  if(palavra.toLowerCase() == 'javascript') {
    alert('A palavra JavaScript foi fornecida pelo usuário');
  } else {
    alert('Não foi encontrada a palavra Javascript');
  }
}

let palavra = 'JavaScrIpt';

palavraJavascript(palavra);
*/

// 4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.

/* 
const string1 = prompt('Escreva a primeira palavra');
const string2 = prompt('Escreva a segunda palavra');

if(string1.toLowerCase() == string2.toLowerCase()) {
  alert('As palavras digitadas são iguais');
} else {
  alert('As palavras digitadas são diferentes');
}
 */

// 5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.

/*
function concatenaLista(arr01, arr02) {
  const listaConcatenada = arr01.concat(arr02);
  return listaConcatenada;
}

const lista01 = ['Mario', 'Luigi', 'Bowser', 'Peach'];
const lista02 = ['Nintendo Switch', 'Wii U', 'Nintendo 3DS', 'Wii'];

alert(concatenaLista(lista01, lista02));
*/

// Funções Nativas:

// 6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length.

/*
const valores = [20,15,36,45,54];
const soma = valores.reduce((soma, numero) => soma + numero, 0);
const media = soma/valores.length;

alert(`A média dos números da lista é: ${media}`);
*/

// 7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".

/*
function dataHora() {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2,0);
  const mes = String(data.getMonth() + 1).padStart(2,0);
  const ano = String(data.getFullYear());
  const hora = String(data.getHours()).padStart(2,0);
  const minuto = String(data.getMinutes()).padStart(2,0);
  const segundos = String(data.getSeconds()).padStart(2,0);

  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundos}`;
}

alert(dataHora());
*/

// 8- Implemente um programa que encontre o maior valor em um array usando a função Math.max().

/*
const lista = [1,2,3,4,5,10,15,25,30,35];
const maiorNumero = Math.max(...lista); // não conhecia o spread syntax
alert(maiorNumero);
*/

// 9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos.

/*
function numeroAleatorio(a,b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}

const numeroInicial = parseInt(prompt('Digite o primeiro número do intervalo'));
const numeroFinal = parseInt(prompt('Digite o último número do intervalo'));

alert(numeroAleatorio(numeroInicial, numeroFinal));
*/

// 10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.

/*
function numeroPrimo(numero) {
  let validacao;
  for (let contador = 2; contador < numero; contador++) {
      if (numero % contador === 0) {
        return `O número ${numero} não é primo.`
      }
  }
  return `O número ${numero} é primo.`
}

const numero = parseInt(prompt('Digite um número qualquer'));
alert(numeroPrimo(numero));
*/

// Coerção e Tipos de Dados:

// 11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado.

/*
const valor1 = '5';
const valor2 = 2;
const multiplicacao = valor1 * valor2;
alert(`O JavaScript é dinamicamente tipado, com isso ele converte a string para número e o resultado da multiplicação entre ${valor1} e ${valor2} é: ${multiplicacao}`);
*/

// 12- Converta a string "123" em um número inteiro e armazene-o em uma variável.

/*
sequenciaString = '123';
converteInteiro = parseInt(sequenciaString);
alert(`O elemento ${converteInteiro} passado como ${typeof sequenciaString} foi convertido para o tipo ${typeof converteInteiro}`);
*/

// 13- Escreva um programa que adicione um número e uma string.

/*
const numero = prompt('Insira um número');
const palavra = prompt('Insira uma frase ou palavra');

const concatenacao = numero + palavra;
alert(concatenacao);
*/

// 14- Explique o resultado e discuta a coerção que ocorre.

/*
alert('Ocorre uma coerção implícita de string pois o compilador atribui automaticamente os tipos de dados. Dessa forma ele concatena as duas variáveis em um único, tipo string');
*/

// 15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo.

/*
const varNull = null;
const varUndefined = undefined;

alert(varNull === varUndefined ? 'São idênticas em valor e tipo' : 'São diferentes de valor e tipo');
alert(`valor: ${varNull} - tipo: ${typeof varNull}`);
alert(`valor: ${varUndefined} - tipo: ${typeof varUndefined}`);
*/

// 16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof.

/* 
const estaFuncao = () => {
  console.log('Achou a função');
};

alert(estaFuncao);
alert(typeof estaFuncao);
 */

// Operadores Matemáticos e Lógicos:

// 18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20.

/*
const expressao = ((10+5)*3)/20;
alert(expressao);
*/

// 19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo.

/*
function numeroPositivoImpar(numero) {
  if(numero >= 0 && numero %2 != 0) {
    return alert(`O número ${numero} é positivo e ímpar`);
  } else if(numero >= 0 && numero %2 == 0) {
    return alert(`O número ${numero} é positivo e par`);
  } else {
    return alert(`O número ${numero} é negativo`);
  }  
}

const numero = numeroPositivoImpar(prompt('Insira um número qualquer'));
*/


// 20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.

/*
function checarBissexto(ano) {
  if(ano % 4 == 0) {
    if(ano % 100 == 0) {
      if(ano % 400 == 0) {
        return `O ano ${ano} é um ano bissexto.`;
      } else {
        return `O ano ${ano} não é um ano bissexto.`
      }
    } else {
      return `O ano ${ano} é um ano bissexto.`;
    }
  } else {
    return `O ano ${ano} não é um ano bissexto.`
  }
}

const anoBuscado = prompt('Insira um ano no formato AAAA');
alert(checarBissexto(anoBuscado));
*/

// 21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos).

/*
function permissaoEntrada(nome, idade) {
  if(idade >= 18) {
    if(membros.includes(nome)) {
      return `${nome}, você está banido deste clube.`;
    } else {
      return `Olá ${nome}, boas vindas.`;
    }
  } else {
    return 'Hoje não, Faro!';
  }
}

let membros = ['Pedro', 'Rodrigo', 'Fernando'];
const idadeMinima = 18;

const nome = prompt('Informe seu nome');
const idade = prompt('Informe sua idade');
alert(permissaoEntrada(nome, idade));
*/

// 22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados.

/*
function consultaBanco(usuario, senha) {
  for(let dados of bancoDados) {
    if(dados.nome === usuario && dados.senha === senha) {
      return 'Login realizado com sucesso';
    }
  }
  return 'Usuário e senha incorretos ou sem cadastro.'  
}

const bancoDados = [
  {nome: 'pedro', senha: 'pedro123'},
  {nome: 'jose', senha: 'jose123'},
  {nome: 'joao', senha: 'joao123'}
];

const usuario = prompt('Informe seu usuario:');
const senha = prompt('Informe sua senha:');
alert(consultaBanco(usuario, senha));
*/