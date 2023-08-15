// PROJETO FINAL - TODO LIST

// VARIÁVEIS
let tracos = "-";
let toDoList = {
    id: 1,
    tarefa: "teste"
};

//FUNÇÕES

function mostrarMenu() {
    let opcao = prompt(`\n${tracos.repeat(30)}\n        MENU DE OPÇÕES\n${tracos.repeat(30)}\n
Escolha a opção desejada digitando sua respectiva numeração: 

1 - Adicionar Tarefa
2 - Editar Tarefa
3 - Remover Tarefa
4 - Listar tarefas
5 - Procurar uma tarefa
6 - Sair

`);

let opcaoInt = parseInt(opcao);

    if (isNaN.opcaoInt) {
        console.log("Opção inválida.")
        return mostrarMenu() 
    }
    else {
        escolhaMenu(opcaoInt);
    }
}


function escolhaMenu(opcao) {
    switch (opcao) {
        case 1:
            adicionarTarefa();
            let multiplasTarefas = prompt('Deseja adicionar outra tarefa? S/N ');
            if (multiplasTarefas.toUpperCase() === 'S') {
                escolhaMenu(1)
            }
            else if (multiplasTarefas.toUpperCase() === 'N') {
                mostrarMenu();
            }
            else {
                console.log("Opção inválida!")
                mostrarMenu();
            }
            break;
        case 2:
            editarTarefa();
            break;
        case 3:
            removerTarefa();
            break;
        case 4:
            listarTarefas();
            break;
        case 5:
            procurarTarefa();
            break;
        case 6:
            sair();
            break;
    }
}


function adicionarTarefa() {
    let tarefa = prompt('Qual tarefa deseja adicionar a lista? ');
    let id;

    try {
        toDoList.id = toDoList.id;
        toDoList.tarefa;
        console.log("Tarefa adiciona com sucesso!")
        console.log(id, tarefa);
    } 
    catch (e) {
        console.log(e.message)
    }
}

// CHAMADAS
const prompt = require('prompt-sync')();

mostrarMenu();
