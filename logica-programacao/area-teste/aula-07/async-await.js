async function minhaFuncaoAssincrona() {
  setTimeout(() => {
    const resultado = 'Operação concluída';
    return resultado;
  }, 5000);
}

const resultado = await minhaFuncaoAssincrona();





console.log('Teste');