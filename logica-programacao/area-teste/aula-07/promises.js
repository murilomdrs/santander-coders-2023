const minhaPromise = new Promise((resolve, reject) => {
  // simular uma operação assíncrona bem sucedida
  setTimeout(() => {
    const resultado = 'Operação concluída';
    resolve(resultado); // resolvendo a promise
    // se eu quisesse simular um reject
    // reject(new Error('Algo deu errado'));
  }, 1000);
});

// manipular promise
// trabalhar com encadeamento de funções
console.log('marcar o tempo do setTimeout');
minhaPromise.then(resultado => {
  console.log(resultado); // tratar a promise no caso de sucesso
}).catch(erro => {
  console.log(erro); // tratar a promise no caso de reject
});