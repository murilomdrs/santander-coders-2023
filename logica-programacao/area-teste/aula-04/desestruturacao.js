const numeros = [1,2,3,4,5];

// Atribuir
const [primeiro, segundo, terceiro] = numeros;
console.log(primeiro);
console.log(segundo);
console.log(terceiro);

// Desestruturação de objeto

const pessoa = {
  nome: 'José',
  idade: 31
};

const { nome, idade } = pessoa
console.log(nome);
console.log(idade);