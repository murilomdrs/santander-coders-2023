const arrayOriginal = [1,2,3];
const copiaArray = [...arrayOriginal];

console.log(arrayOriginal);
console.log(copiaArray);

const pessoa = {
  nome: 'Ionar',
  idade: 25
};

const pessoaSigno = {...pessoa, signo: 'gemeos'};
console.log(pessoaSigno);