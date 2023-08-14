// Coalescência é trabalhar com null ou undefined, ele foi introduzido no ECMAScript para conseguir lidar com esses valores, de uma maneira mais eficiente, assim com um código mais limpo.

const valorNull = null;
console.log(valorNull);

const valorString = 'Isso é uma string';
console.log(valorString);

const valorUndefined = undefined;
console.log(valorUndefined);

const formatacao = valorNull ?? valorString;
console.log(formatacao);