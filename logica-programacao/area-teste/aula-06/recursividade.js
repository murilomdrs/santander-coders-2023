function contagemRegressiva(numero) {

  if(numero <= 0) {
    console.log('Oba, deu certo a contagem regressiva.');
  } else {
    console.log(numero);
    contagemRegressiva(numero - 1);
  }
}

contagemRegressiva(5);