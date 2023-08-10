/* 

Como fazer uma busca simples em um vetor de tamanho N?

*/

function buscaSimples(vetor, valorProcurado) {
  let indice = undefined;
  for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] === valorProcurado) {
      indice = i;
    }
  }
  return indice
}

const vetor = [4,8,16,23,35,47];
const valorProcurado = 87;
const indiceProcurado = buscaSimples(vetor, valorProcurado);

if(indiceProcurado != undefined) {
  console.log(`O valor ${valorProcurado} foi encontrado no índice ${indiceProcurado}`);
} else {
  console.log(`O valor ${valorProcurado} não foi encontrado no vetor.`)
}