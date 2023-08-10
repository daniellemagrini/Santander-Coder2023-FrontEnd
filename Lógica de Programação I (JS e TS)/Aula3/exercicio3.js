// EXERCICIO
// Você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
// Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math:
// Math.round(Math.random() * 10)

i = 0;
listaSorteio = [];

while (i < 6) {
    numeroSorteado = Math.round(Math.random() * 60)

    if (!listaSorteio.includes(numeroSorteado)) {
        listaSorteio.push(numeroSorteado);
    }

    i++;
}

console.log(`Os números sorteados foram: ${listaSorteio}`)