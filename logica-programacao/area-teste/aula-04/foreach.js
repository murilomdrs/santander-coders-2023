const frutas = ['maçã', 'banana', 'laranja'];

/* frutas.forEach(function(elemento) {
  console.log(`Eu preciso da fruta ${elemento}`);
  console.log(elemento);
}); */

// frutas.forEach(fruta => console.log(fruta));

// acessar o índice

frutas.forEach(function (fruta, indice, array) {
  console.log('Índice' + indice);
  console.log('Array completo' + array);
  console.log('Elemento' + fruta);
})