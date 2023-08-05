/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em diante : aumento de 5% 
    
Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/


const prompt = require('prompt-sync')();

let salario = prompt('Digite seu salário atual ');
console.log(`${salario}\n`);

let perc = 0;

salario.replace(",", ".");

if (isNaN(salario) || salario < 0) {
    console.log("Salário inválido.")
}
else {
    salario = parseFloat(salario)

    if (salario <= 1500) {
        perc = 0.20
    }
    else if (salario > 1500 && salario < 1700) {
        perc = 0.15
    }
    else if (salario >= 1700 && salario < 2000) {
        perc = 0.10
    }
    else {
        perc = 0.05
    }

    salarioReajustado = (salario + (salario * perc));

    console.log(`salario antes do reajuste: R$${salario.toFixed(2)}\n`)
    console.log(`o percentual de aumento aplicado: ${perc * 100}%\n`)
    console.log(`o valor do aumento: R$${(salarioReajustado - salario).toFixed(2)}\n`)
    console.log(`o novo salário, após o aumento: R$${salarioReajustado.toFixed(2)}\n`)
}