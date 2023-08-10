// EXERCÍCIO
// Crie um algoritmo usando o for que leia uma lista.
// Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
// Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lista -> [1,2,3,4,5,6,7,8,9]
// [2, 4, 6, 8] -> pares
// [1, 3, 5, 7, 9] -> impares

lista = [1,2,3,4,5,6,7,8,9];
pares = [];
impares = [];

for (i = 0; i < lista.length; i++) {
    if (i % 2 === 0 || i === 0) {
        pares.push(i);
    }
    else {
        impares.push(i);
    }
}

console.log(`Lista de números pares: ${pares}`);
console.log(`Lista de números ímpares: ${impares}`);
