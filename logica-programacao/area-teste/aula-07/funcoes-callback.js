function processarDados(dados, callback) {
  // simular uma operação assíncrona, para simular uma requisição de rede
  setTimeout(function() {
    const resultado = dados.toUpperCase();
    callback(resultado);
  }, 1000); // aguardar um segundo antes de executar o callback
}

function exibirResultados(res) {
  console.log('Resultado:' + res);
}

const dados = 'exemplo';

processarDados(dados, exibirResultados);