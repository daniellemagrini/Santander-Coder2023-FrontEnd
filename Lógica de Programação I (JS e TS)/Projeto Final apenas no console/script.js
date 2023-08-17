// PROJETO FINAL - TODO LIST

// VARIÁVEIS
let tracos = "-";
let toDoList = [
    {
        id: 1,
        tarefa: "teste"
    },
    {
        id: 2,
        tarefa: "teste2"
    },
    {
        id: 3,
        tarefa: "levar carro para lavar"
    }
]


//FUNÇÕES

function mostrarMenu() {
    console.log(`\n${tracos.repeat(30)}\n        MENU DE OPÇÕES\n${tracos.repeat(30)}\n
Escolha a opção desejada digitando sua respectiva numeração: 

1 - Adicionar Tarefa
2 - Editar Tarefa
3 - Remover Tarefa
4 - Listar tarefas
5 - Procurar uma tarefa
6 - Sair

`);

let opcao = parseInt(prompt());

    if (isNaN.opcao || opcao > 6 || opcao < 1) {
        console.log("Opção inválida.")
        return mostrarMenu() 
    }
    else {
        escolhaMenu(opcao);
    }
}


function escolhaMenu(opcao) {
    switch (opcao) {
        case 1:
            adicionarTarefa();
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
    let id = Object.keys(toDoList).length;

    try {
        id = id + 1;
        tarefa;
        toDoList.push({id, tarefa});
        console.log("Tarefa adiciona com sucesso!")

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
    } 
    catch (e) {
        console.log(e.message);
    }
}

function editarTarefa() {
    
    try {
        toDoList.forEach(element => {    
            console.log(element);
        });
        let id = prompt('Qual tarefa gostaria de editar? Favor digitar o id da mesma ');
        let tarefa = prompt('Digite o que gostaria de editar ');
        const index = toDoList.indexOf(id);
        
        if (id) {
            const tarefaEdit = toDoList.find((tarefa) => tarefa.id === parseInt(id));
            tarefaEdit.tarefa = tarefa;
            console.log("Tarefa editada com sucesso.");
            mostrarMenu();
        }
        else {
            console.log("id não existe");
            mostrarMenu();
        }
    } 
    catch (e) {
        console.log(e.message);
    }
}

function removerTarefa() {

    try {
        toDoList.forEach(element => {    
            console.log(element);
        });
        let idTarefa = prompt('Qual tarefa gostaria de remover? Favor digitar o id da mesma ');
        const index = toDoList[idTarefa] = idTarefa;
        
        if (index >= 0) {
            toDoList.splice((index - 1), 1);
            console.log("Tarefa removida com sucesso.");
            let multiplasTarefas = prompt('Deseja remover outra tarefa? S/N ');
            if (multiplasTarefas.toUpperCase() === 'S') {
                removerTarefa()
            }
            else {
                mostrarMenu();
            }
        }
        else {
            console.log("id não existe");
            mostrarMenu();
        }   
    } 
    catch (e) {
        console.log(e.message);    
    }  
}

function listarTarefas() {

    try {
        toDoList.forEach(element => {    
            console.log(element);
        });

        let menu = prompt('Deseja voltar ao menu principal? S/N ');
        if (menu.toUpperCase() === 'S') {
            mostrarMenu()
        }
        else {
            sair();
        }  
    } 
    catch (e) {
        console.log(e.message);
    }
}

function procurarTarefa() {

    try {
        let tarefa = prompt('Digite uma palavra que tenha no título da tarefa ');
        console.log(toDoList.filter(el => el.tarefa.includes(tarefa)));
        let menu = prompt('Deseja procurar outra tarefa? S/N ');
        if (menu.toUpperCase() === 'S') {
            procurarTarefa()
        }
        else {
            mostrarMenu();
        }
    } 
    catch (e) {
        console.log(e.message);  
    }
}


function sair() {
    console.log("Até mais tarde!\n")
    process.exit()
}

// CHAMADAS
const prompt = require('prompt-sync')();

mostrarMenu();
