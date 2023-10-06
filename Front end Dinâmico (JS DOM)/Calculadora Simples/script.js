const resultado = document.getElementById("resultado"); 
const resultadoHistorico = document.getElementById("resultadoHistorico"); 
const numeros = document.querySelectorAll("[id*=num]");
const operadores = document.querySelectorAll("[id*=btn]");

let op;
let contador = 0;

numeros.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        contador += 1;
        if (contador < 12) {
            resultado.innerText += value;
        }
    });
});

operadores.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        contador =0;
        validacoesClique(value);
    });
});

function validacoesClique(value) {
    if(value === "C") {
        limparTudo();
    }
    else if (value === "CE") {
        limpar();
    }
    else if (value === ".") {
        resultado.innerText += value;
    }
    else if (resultadoHistorico.innerText === "") {
        if (value === "Enter") {
            resultadoHistorico.innerText = "";
            resultado.innerText = "";
        }
        else {
            resultadoHistorico.innerText += resultado.textContent + value;
            resultado.innerText = "";
        }  
    }
    else if (resultadoHistorico.innerText.slice(-1) != "+" && resultadoHistorico.innerText.slice(-1) != "-" && resultadoHistorico.innerText.slice(-1) != "x" && resultadoHistorico.innerText.slice(-1) != "÷") {
        if (value === "Enter") {
            limpar();
        }
        else {
            resultadoHistorico.innerText += value; 
        }    
    }
    else {
        if (resultadoHistorico.innerText.includes("+") || resultadoHistorico.innerText.includes("-") || resultadoHistorico.innerText.includes("x") || resultadoHistorico.innerText.includes("÷")) {
            calculo(resultado.textContent);
            resultado.innerText = "";
        }
        else {
            resultadoHistorico.innerText = "";
            resultadoHistorico.innerText += resultado.textContent + value;
            resultado.innerText = "";
        }
    }    
}

function calculo(num) {
    op = /\+|-|÷|x/;
    let operador = resultadoHistorico.innerText.slice(-1);  
    
    if (operador.includes("+") || operador.includes("-") || operador.includes("x") || operador.includes("÷")) {
        numero = resultadoHistorico.innerText.split(op);
        valor1 = numero[0];
        valor2 = resultado.textContent;

        switch (operador) {
            case "+":
                resultadoHistorico.innerText = somar(valor1, valor2);
                break;
            case "-":
                resultadoHistorico.innerText = subtrair(valor1, valor2);
                break;
            case "x":
                resultadoHistorico.innerText = multiplicacao(valor1, valor2);
                break;
            case "÷":
                resultadoHistorico.innerText = divisao(valor1, valor2);
                break;
        }
    }
    else {
        resultadoHistorico.innerText = resultado.textContent;
    }
}

function calculo2(num1, op, num2) {
    switch (op) {
        case "+":
            resultadoHistorico.innerText = somar(num1, num2);
            break;
        case "-":
            resultadoHistorico.innerText = subtrair(num1, num2);
            break;
        case "x":
            resultadoHistorico.innerText = multiplicacao(num1, num2);
            break;
        case "÷":
            resultadoHistorico.innerText = divisao(num1, num2);
            break;
    }
}

function limparTudo() {
    resultado.innerText = "";
    resultadoHistorico.innerText = "";
}

function limpar() {
    resultado.innerText = "";
}

function somar(num1, num2) {
    return (parseFloat(num1) + parseFloat(num2));
}

function subtrair(num1, num2) {
    return (num1 - num2);
}

function divisao(num1, num2) {
    return (num1 / num2);
}

function multiplicacao(num1, num2) {
    return (num1 * num2);
}


