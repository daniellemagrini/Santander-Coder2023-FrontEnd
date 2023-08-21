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
    },
    {
        id: 4, tarefa: 'ir ao centro encontrar minha amiga'
    },
    { 
        id: 5, tarefa: 'lavar a cabeca'
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
        repetirAcao('adicionar');
    } 
    catch (e) {
        console.log(e.message);
        throw console.error("Não foi possível adicionar a tarefa!"); 
    }
}

function editarTarefa() {
    
    try {
        listarTarefas2();
        let id = prompt('Qual tarefa gostaria de editar? Favor digitar o id da mesma ');
        const index = toDoList.findIndex(item => item.id === parseInt(id));
        
        if (index !== -1) {
            let tarefa = prompt('Digite o que gostaria de editar ');
            const tarefaEdit = toDoList.find((tarefa) => tarefa.id === parseInt(id));
            tarefaEdit.tarefa = tarefa;
            console.log("Tarefa editada com sucesso.");
            repetirAcao('editar');
        }
        else {
            console.log("id não existe");
            repetirAcao('editar');
        }
    } 
    catch (e) {
        console.log(e.message);
        throw console.error("Não foi possível editar a tarefa!"); 
    }
}

function removerTarefa() {

    try {
        listarTarefas2();
        let id = prompt('Qual tarefa gostaria de remover da lista? Favor digitar o id da mesma ');
        const index = toDoList.findIndex(item => item.id === parseInt(id));
        
        if (index !== -1) {
            toDoList.splice(index, 1);
            console.log("Tarefa removida com sucesso.\n");
            repetirAcao('remover');
        }
        else {
            console.log("id não existe");
            mostrarMenu();
        }
    } 
    catch (e) {
        console.log(e.message);  
        throw console.error("Não foi possível remover a tarefa!");   
    }  
}

function listarTarefas() {

    try {
        listarTarefas2();
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

function listarTarefas2() {

    try {
        toDoList.forEach(element => {    
            console.log(element);
        });
    } 
    catch (e) {
        console.log(e.message);
        throw console.error("Não foi possível listar as tarefas!"); 
    }
}


function procurarTarefa() {
    try {
        let tarefa = prompt('Digite uma palavra que tenha no título da tarefa ');
        let tarefasFiltradas = toDoList.filter(el => el.tarefa.includes(tarefa));
        if(tarefasFiltradas.length != 0) {
            console.log (tarefasFiltradas);
        }
        else {
            console.log ("Nenhuma tarefa encontrada");
        }       
        repetirAcao('procurar');
    } 
    catch (e) {
        console.log(e.message); 
        throw console.error("Não foi possível procurar a tarefa!"); 
    }
}


function sair() {
    console.log("Até mais tarde!\n")
    process.exit()
}

function repetirAcao(acao) {
    let multiplasTarefas = prompt(`Deseja ${acao} outra tarefa? S/N `);
    if (multiplasTarefas.toUpperCase() === 'S') {
        if(acao == 'adicionar')
        {
            adicionarTarefa();
        }
        else if (acao == 'editar') 
        {
            editarTarefa();
        }
        else if (acao == 'remover') 
        {
            removerTarefa();
        }
        else if (acao == 'procurar') 
        {
            procurarTarefa();
        }
        else {
            console.log("Opção inválida!")
            mostrarMenu();
        }
        
    }
    else if (multiplasTarefas.toUpperCase() === 'N') {
        mostrarMenu();
    }
    else {
        console.log("Opção inválida!");
        mostrarMenu();
    }
}


// CHAMADAS
const prompt = require('prompt-sync')();

mostrarMenu();
