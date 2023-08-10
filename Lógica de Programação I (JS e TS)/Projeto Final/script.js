//VARIÁVEIS
const addTask = document.querySelector("#addTask");
const addInput = document.querySelector("#addInput");
const todoList = document.querySelector("#to-do-list");
const editItem = document.querySelector("#editItem");

//FUNÇÕES
const savetask = (text) => {

    //Criando a div de classe to-do-list-itens
    const task = document.createElement("div");
    task.classList.add("to-do-list-itens"); // adicionando uma classe a div

    //Criando o h3 da div de classe to-do-list-itens
    const taskTitle = document.createElement("h3");
    taskTitle.innerText = text; // adicionando um texto nesse elemento criado
    task.appendChild(taskTitle); // colocando o h3 na div task

    //Criando os botões da div de classe to-do-list-itens (CHECK)
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("to-do-list-buttons", "checkItem", "to-do-list-buttonsItemCompleted");
    checkBtn.classList.add("checkItem"); // adicionando uma classe nesse botão
    checkBtn.innerHTML = '<i class="fa-solid fa-clipboard-check fa-xl" style="color: #6bf50f;"></i>'; // colocando o icone dentro
    task.appendChild(checkBtn); // colocando o botão dentro da div task

    
    //Criando os botões da div de classe to-do-list-itens (EDIT)
    const editBtn = document.createElement("button");
    editBtn.classList.add("to-do-list-buttons", "editItem", "to-do-list-buttonsItemCompleted");
    editBtn.classList.add("editItem"); // adicionando uma classe nesse botão
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square fa-xl" style="color: #fdf50d;"></i>'; // colocando o icone dentro
    task.appendChild(editBtn); // colocando o botão dentro da div task

    
    //Criando os botões da div de classe to-do-list-itens (DELETE)
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("to-do-list-buttons", "deleteItem", "to-do-list-buttonsItemCompleted");
    deleteBtn.classList.add("deleteItem"); // adicionando uma classe nesse botão
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash fa-xl" style="color: #d82222;"></i>'; // colocando o icone dentro
    task.appendChild(deleteBtn); // colocando o botão dentro da div task

    todoList.appendChild(task); // colocar na div geral
    
    addInput.value = "";
    addInput.focus();
}

//EVENTOS
addTask.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = addInput.value;

    if (inputValue) {
        savetask(inputValue)
    }
});

document.addEventListener("click", (e) => {

    const clickedElement = e.target; //pega o elemento clicado
    const divElement = clickedElement.closest("div"); // Selecionando a div mais próxima do elemento clicado

    if (clickedElement.classList.contains("checkItem")) { // vendo se o elemento clicado é o botão check
        divElement.classList.toggle("ItemCompleted");  // Se ele não tem a classe ItemCompleted, ele coloca, se ele tem, ele tira (toggle = troca)       
    }

    if (clickedElement.classList.contains("editItem")) { // vendo se o elemento clicado é o botão edit
        divElement.classList.toggle("ItemCompleted");  // Se ele não tem a classe ItemCompleted, ele coloca, se ele tem, ele tira (toggle = troca) 
    }

    if (clickedElement.classList.contains("deleteItem")) { // vendo se o elemento clicado é o botão delete
        divElement.remove();  // remove o elemento
    }
});