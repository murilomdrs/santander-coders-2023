function somar(numero = 11, arrayList, numero2, numero3, stringNome) {
  console.log(numero);
  console.log(arrayList);
  console.log(numero2);
  console.log(numero3);
  console.log(stringNome);
}

console.log(somar(undefined, 'Murilo'))

function soma(...numeros) {
  return numeros.reduce((acumulador, indice) => acumulador + indice);
}

console.log(soma(1,2,3,4,5,6));