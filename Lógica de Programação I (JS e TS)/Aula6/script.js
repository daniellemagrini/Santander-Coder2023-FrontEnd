/*
Faça um programa com uma função chama somaImposto.
A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem
e custo, que é o custo de um item antes do imposto.
A função cálcula o valor com o imposto sobre vendas e retorna o valor de custo e o novo valor"
*/

taxaImposto = 0.10;
valorDeCusto = 40;

function somaImposto(taxaImposto, valorDeCusto) {
      valorFinal = valorDeCusto + (valorDeCusto * taxaImposto);
      return valorFinal;
}

console.log(`\nValor de custo do produto: ${valorDeCusto}
Valor final do produto: ${somaImposto(taxaImposto, valorDeCusto)}\n`);