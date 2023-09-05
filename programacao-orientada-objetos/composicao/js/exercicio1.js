/* Composição é como montar um quebra-cabeça.
Cada peça do quebra-cabeça é uma parte pequena, mas quando todas as peças são montadas corretamente, elas formam uma imagem completa.
Na programação orientada a objetos (POO), composição se refere à maneira como objetos de uma classe podem ser combinados para criar um objeto maior e mais complexo. */

/* Vamos usar um exemplo com uma classe "Casa" e uma classe "Quarto".
Cada casa pode conter vários quartos, e a relação entre a casa e seus quartos é um exemplo de composição.
A casa é formada pela combinação de quartos individuais, e os quartos fazem parte da casa. */

class Quarto {
  constructor(area) {
    this.area = area; // Cada quarto tem sua própria área
  }
}

class Casa {
  constructor() {
    this.quartos = []; // Uma casa é composta por um conjunto de quartos
  }

  adicionarQuarto(quarto) {
    this.quartos.push(quarto); // Adiciona um quarto ao conjunto de quartos da casa
  }

  calcularAreaTotal() {
    let areaTotal = 0;
    for (const quarto of this.quartos) {
      areaTotal += quarto.area; // Calcula a área total da casa somando as áreas dos quartos
    }
    return areaTotal;
  }
}

const casa1 = new Casa();
const casa2 = new Casa();
const quarto1 = new Quarto(20); // Quarto com 20 metros quadrados
const quarto2 = new Quarto(15); // Quarto com 15 metros quadrados
const quarto3 = new Quarto(5);

casa1.adicionarQuarto(quarto1);
casa1.adicionarQuarto(quarto2);
casa2.adicionarQuarto(quarto1);
casa2.adicionarQuarto(quarto3);
casa2.adicionarQuarto(quarto3);

console.log(`Área total da casa 1: ${casa1.calcularAreaTotal()} metros quadrados.`);
console.log(`Área total da casa 2: ${casa2.calcularAreaTotal()} metros quadrados.`);