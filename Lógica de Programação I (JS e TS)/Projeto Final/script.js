//VARIÁVEIS
const addTask = document.querySelector("#addTask");
const addInput = document.querySelector("#addInput");
const todoList = document.querySelector("#to-do-list");
const editItem = document.querySelector("#editItem");
const modalContainerEdit = document.querySelector("#modalContainerEdit");
const editInput = document.querySelector("#editInput");
const saveButton = document.querySelector("#saveButton");

let oldTaskTitle;


//FUNÇÕES
function insertTask(text) {
    
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
    checkBtn.innerHTML = '<i class="fa-solid fa-clipboard-check fa-xl checkItem" style="color: #6bf50f;"></i>'; // colocando o icone dentro
    task.appendChild(checkBtn); // colocando o botão dentro da div task

    
    //Criando os botões da div de classe to-do-list-itens (EDIT)
    const editBtn = document.createElement("button");
    editBtn.classList.add("to-do-list-buttons", "editItem", "to-do-list-buttonsItemCompleted");
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square fa-xl editItem" style="color: #fdf50d;"></i>'; // colocando o icone dentro
    task.appendChild(editBtn); // colocando o botão dentro da div task

    
    //Criando os botões da div de classe to-do-list-itens (DELETE)
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("to-do-list-buttons", "deleteItem", "to-do-list-buttonsItemCompleted");
    deleteBtn.classList.add("deleteItem"); // adicionando uma classe nesse botão
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash fa-xl deleteItem" style="color: #d82222;"></i>'; // colocando o icone dentro
    task.appendChild(deleteBtn); // colocando o botão dentro da div task

    todoList.appendChild(task); // colocar na div geral
    
    addInput.value = "";
    addInput.focus();
}

function openModal(modal) {
    let divElement = document.getElementById(modal);
    divElement.classList.add("active");
    console.log(modal) //
    //modal.style.display = flex; 
}

function closeModal(modal) {
    console.log("fechou") 
}

function editTask() {

    editItem.addEventListener('click', openModal('modalContainerEdit'));
}


//EVENTOS
addTask.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = addInput.value;

    if (inputValue) {
        insertTask(inputValue)
    }
});

document.addEventListener("click", (e) => {

    const clickedElement = e.target; //pega o elemento clicado
    const divElement = clickedElement.closest("div"); // Selecionando a div mais próxima do elemento clicado
    let taskTitle;

    if (divElement && divElement.querySelector("h3")) {
        taskTitle = divElement.querySelector("h3").innerText;
    }

    if (clickedElement.classList.contains("checkItem")) { // vendo se o elemento clicado é o botão check
        divElement.classList.toggle("ItemCompleted");  // Se ele não tem a classe ItemCompleted, ele coloca, se ele tem, ele tira (toggle = troca)       
    }

    if (clickedElement.classList.contains("editItem")) { // vendo se o elemento clicado é o botão edit
        //openModalEdit();  // Se ele não tem a classe ItemCompleted, ele coloca, se ele tem, ele tira (toggle = troca) 
    }

    if (clickedElement.classList.contains("deleteItem")) { // vendo se o elemento clicado é o botão delete
        divElement.remove();  // remove o elemento
    }
});