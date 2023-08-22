// Adicionar uma tarefa
// Editar uma tarefa salva
// Remover uma tarefa salva
// Listar todas as tarefas salvas
// Obter uma tarefa, através de um parâmetro (id)

const prompt = require("prompt-sync")();
let tracos = "-";

const listaTarefas = [
  { id: 1, tarefa: "Fazer a cama" },
  { id: 2, tarefa: "Lavar a louça" },
  { id: 3, tarefa: "Passar roupa" },
  { id: 4, tarefa: "Limpar o banheiro" },
  { id: 5, tarefa: "Varrer o chão" },
  { id: 6, tarefa: "Preparar o jantar" },
  { id: 7, tarefa: "Organizar a despensa" },
  { id: 8, tarefa: "Cuidar das plantas" },
  { id: 9, tarefa: "Passear com o cachorro" },
  { id: 10, tarefa: "Arrumar o quarto" },
];

function adicionar() {
    try {
        const tarefa = prompt("Qual tarefa deseja adicionar a lista? ");
        const proxId = listaTarefas.length + 1;
        listaTarefas.push({ id: proxId, tarefa: tarefa }); 
        console.log("\x1b[32mTarefa adicionada com sucesso.\x1b[0m");
        repetirAcao('adicionar');
        
    } catch (e) {
        console.log(e.message);
        throw console.error("Não foi possível adicionar a tarefa!");
    }  
}

function deletar() {
  try {
    exibirLista();
    let id = prompt(
      "Qual tarefa gostaria de remover da lista? Favor digitar o id da mesma "
    );
    const index = listaTarefas.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
      listaTarefas.splice(index, 1);
      console.log("\x1b[32mTarefa removida com sucesso.\x1b[0m");
      exibirLista();
      repetirAcao('remover');
    }
    else {
        console.log("\x1b[31mID de tarefa inválido.\x1b[0m");
        repetirAcao('remover');
    }
  } catch (e) {
    console.log(e.message);
    throw console.error("Não foi possível remover a tarefa!");
  }
}

function exibirLista2() {
    exibirLista();
    let multiplasTarefas = prompt("Deseja retornar ao menu principal? S/N ");
    if (multiplasTarefas.toUpperCase() === "S") {
        mostrarMenu();
    } else {
        sair();
    }
}

function exibirLista() {
    try {
        console.log("Lista de tarefas: ");
        listaTarefas.forEach((item) => {
            console.log(`${item.id}: ${item.tarefa}`);
        });
    } catch (e) {
        console.log(e.message);
        throw console.error("Não foi possível exibir as tarefas!");
      }
  
}

function editar() {
    try {
        exibirLista();
        let id = prompt("Qual tarefa gostaria de editar? Favor digitar o id da mesma ");

        const tarefaParaEditar = listaTarefas.find(
            (tarefa) => tarefa.id === parseInt(id)
        );

        if (tarefaParaEditar) {
            const novaTarefa = prompt("Digite a nova tarefa:");
            tarefaParaEditar.tarefa = novaTarefa;
            console.log("\x1b[32mTarefa editada com sucesso!\x1b[0m");
            console.log(listaTarefas);
        } else {
            console.log("\x1b[31mID de tarefa inválido.\x1b[0m");
        }
        repetirAcao('editar');
        
    } catch (e) {
        console.log(e.message);
        throw console.error("Não foi possível editar a tarefa!");
    }
}

function retornarPorId() {
    try {
        const id = prompt("Qual tarefa gostaria de procurar? Favor digitar o id da mesma ");
        const tarefa = listaTarefas.find((item) => item.id === parseInt(id));
        if (tarefa) {
            console.log(tarefa);
            repetirAcao('retornar');
        }
        else {
            console.log("\x1b[31mID de tarefa inválido.\x1b[0m");
            repetirAcao('retornar');
        }
        
    } catch (e) {
        console.log(e.message);
        throw console.error("Não foi possível retornar nenhuma tarefa pelo id!");
    }
  
}

function procurarTarefa() {
    try {
      const tarefa = prompt("Digite uma palavra que tenha no título da tarefa ");
      const tarefasFiltradas = listaTarefas.filter((el) => el.tarefa.includes(tarefa));
      if(tarefasFiltradas.length != 0) {
        console.log(tarefasFiltradas);
        repetirAcao('procurar');
      }
      else {
        console.log("\x1b[31mNenhuma tarefa encontrada.\x1b[0m");
        repetirAcao('procurar');
      }
      
    } catch (e) {
      console.log(e.message);
      throw console.error("Não foi possível retornar nenhuma tarefa!");
    }
  }

function sair() {
  console.log("Até mais tarde!\n");
  process.exit();
}

function mostrarMenu() {
  console.log(`\n${tracos.repeat(30)}\n        MENU DE OPÇÕES\n${tracos.repeat(
    30
  )}\n
Escolha a opção desejada digitando sua respectiva numeração: 

1 - Adicionar Tarefa
2 - Editar Tarefa
3 - Remover Tarefa
4 - Listar tarefas
5 - Procurar uma tarefa por id
6 - Procurar uma tarefa
7 - Sair

`);
  let opcao = parseInt(prompt());

  if (isNaN(opcao) || opcao < 1 || opcao > 7) {
    console.log("\x1b[31mOpção inválida.\x1b[0m");
    return mostrarMenu();
  } else {
    escolhaMenu(opcao);
  }
}

function escolhaMenu(opcao) {
  switch (opcao) {
    case 1:
      adicionar();
      break;
    case 2:
      editar();
      break;
    case 3:
      deletar();
      break;
    case 4:
      exibirLista2();
      break;
    case 5:
      retornarPorId();
      break;
    case 6:
      procurarTarefa();
      break;
    case 7:
      sair();
      break;
  }
}

function repetirAcao(acao) {
    let multiplasTarefas = prompt(`Deseja ${acao} outra tarefa? S/N `);
    if (multiplasTarefas.toUpperCase() === 'S') {
        if(acao == 'adicionar')
        {
            adicionar();
        }
        else if (acao == 'editar') 
        {
            editar();
        }
        else if (acao == 'remover') 
        {
            deletar();
        }
        else if (acao == 'retornar') 
        {
            retornarPorId();
        }
        else if (acao == 'procurar') 
        {
            procurarTarefa();
        }
        else {
            console.log("\x1b[31mOpção inválida!\x1b[0m")
            mostrarMenu();
        }
        
    }
    else if (multiplasTarefas.toUpperCase() === 'N') {
        mostrarMenu();
    }
    else {
        console.log("\x1b[31mOpção inválida!\x1b[0m");
        mostrarMenu();
    }
}

mostrarMenu();