function dobrar(numero) {
  return numero * 2;
}

function somarDois(numero) {
  return numero + 2;
}

function quadrado(numero) {
  return Math.pow(numero, 2);
}

// composição das funções dobrar, somar2 e quadrado

function transformar(numero) {
  return(quadrado(somarDois(dobrar(numero))));
}

console.log(transformar(5));