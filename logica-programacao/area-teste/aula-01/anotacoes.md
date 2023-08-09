# Santander Coders 2023 - Aula 01
Data: 02/08/2023

## Sugestão de bibliografia
- Arquitetura limpa: O guia do artesão para estrutura e design de software
- Código limpo: Habilidades práticas do Agile Software

## Javascript
### Tipos de entradas
Os principais tipos de dados nativos em JavaScript são os seguintes:
Number
String
Boolean: verdadeiro ou falso;
Undefined: não teve atribuição durante o código;

### Dados nativos no JavaScript
- Null: valor nulo literalmente, é um valor atribuído explicitamente a uma variável para indicar a ausência de valor;
- Object: representa uma coleção de informações, são considerados objetos;
- Array: é um tipo especial de objeto;
- Function: apesar de ser função, é considerado um tipo de dado no JavaScript. Isso permite que as funções sejam atribuídas a variáveis, passadas como argumentos para outras funções e retornadas como valores de outras funções;
- Symbol
- BigInt: inteiros maiores do que o valor máximo seguro para o tipo Number;

### Estado
Em JavaScript, o termo "estado" refere-se à apresentação dos dados e condições relevantes de um programa em um determinado momento durante a sua execução. O estado é composto pelas variáveis e valores armazenados na memória do computador em um determinado momento.

### Constantes e variáveis
- Constante: uma constante é uma referência imutável para um valor. Uma vez que uma constante é declarada e atribuída a um valor, esse valor não pode ser alterado ao longo da execução do programa. Sua palavra chave é const.
- Variável: um valor que é atribuído porém pode ser alterado durante o código. Suas palavras chaves são let e var.

### Tipos de variáveis
- Escopo de bloco:
let: a variável declarada com let tem escopo de bloco. Isso significa que ela é visível apenas dentro do bloco onde foi declarada, seja dentro de uma função, um loop, for, ou um bloco delimitado por chaves {};
var:
- Hoisting:
let: variáveis declaradas com let não sofrem hoisting. "Hoisting" é um comportamento em que as declarações de variáveis são movidas para o topo do escopo antes da execução real do código. Com let, a variável existe apenas no bloco em que foi declarada e, se você tentar acessá-la antes da declaração, ocorrerá um erro de "ReferenceError".
- Tempo de vida ("lifetime") da variável:
let: a variável declarada com let existe apenas dentro do bloco em que foi declarada. Quando o bloco é finalizado, a variável é destruída e não está mais.