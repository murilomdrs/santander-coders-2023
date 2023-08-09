function exemploVar() {
    if(true) {
        var x = 10;
    }
    console.log(x) // neste cenário o x é acessível fora do if onde ele foi declarado
}

function exemploLet() {
    let j = 100;
    if(true) {
        console.log('Dentro do contexto do if')
        console.log(j);
    }
    // console.log(j) // neste cenário o j não fica acessível fora do if onde ele foi declarado
}

exemploVar();
exemploLet();

console.log('Exemplo de uso de constante');
const nome = prompt('Qual é o seu nome?');
console.log(`Olá, ${nome}. Boas vindas!`);

// nome = 'Jaque'; // não é possível ser atribuído