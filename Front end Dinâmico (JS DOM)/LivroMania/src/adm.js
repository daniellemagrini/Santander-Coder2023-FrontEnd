import { catalogo } from "./livros.js";
import { users } from "./users.js";

const containerBotoes = document.querySelector("#containerBotoes");
const btnListaUsuarios = document.querySelector("#btnListaUsuarios");
const btnListaLivros = document.querySelector("#btnListaLivros");
const btnAddLivro = document.querySelector("#btnAddLivro");
const containerAddLivro = document.querySelector("#containerAddLivro");
const containerRemoverLivro = document.querySelector("#containerRemoverLivro");
const containerAddUsuario = document.querySelector("#containerAddUsuario");
const btnAddUsuario = document.querySelector("#btnAddUsuario");
const containerlistaUsuarios = document.querySelector("#containerlistaUsuarios");
const containerlistaLivros = document.querySelector("#containerlistaLivros");
const containerRemoverUsuario = document.querySelector("#containerRemoverUsuario");
const searchbarAdm = document.querySelector("#searchbarAdm");
const subnav = document.querySelector(".sub-nav");
const tableUsuario = document.querySelector("#tableUsuario");
let listaUsers = JSON.parse(localStorage.getItem('users'));
let listaLivros = JSON.parse(localStorage.getItem('catalogo'));
const tituloLivro = document.querySelector("#tituloLivro");
const descricaoLivro = document.querySelector("#descricaoLivro");
const valorLivro = document.querySelector("#valorLivro");
const imagemLivro = document.querySelector("#imagemLivro");
const urlLivro = document.querySelector("#urlLivro");
const categoriaLivro = document.querySelector("#categoriaLivro");


//LISTAR
export function listarUsuarios() {
    containerBotoes.style.display = "none";
    containerlistaUsuarios.style.display = "block";
    subnav.style.display = "block";
    
    for (const usuario of listaUsers) {
      const linhaUsuario = `<tr class="tableUsuario">
      <td class="tableBody">${usuario.id}</td>
      <td class="tableBody">${usuario.cpf}</td>
      <td class="tableBody">${usuario.nome}</td>
      <td class="tableBody">${usuario.email}</td>
      <td class="tableBody">${usuario.senha}</td>
      <td class="tableBody">${usuario.tipo}</td>
  </tr>`;
  
        document.getElementById("tbListaUsuarios").innerHTML += linhaUsuario;
    }
  }

  export function listarLivros() {
    containerBotoes.style.display = "none";
    containerlistaLivros.style.display = "block";
    subnav.style.display = "block";
    
    for (const livro of listaLivros) {
      const linhaLivro = `<tr class="tableLivro">
      <td class="tableBody">${livro.id}</td>
      <td class="tableBody">${livro.titulo}</td>
      <td class="tableBody">${livro.descricao}</td>
      <td class="tableBody">${livro.valor}</td>
      <td class="tableBody">${livro.imagem}</td>
      <td class="tableBody">${livro.url}</td>
      <td class="tableBody">${livro.categoria}</td>
  </tr>`;
  
        document.getElementById("tbListaLivros").innerHTML += linhaLivro;
    }
  }

  //ADICIONAR
  export function addLivros() {
    containerBotoes.style.display = "none";
    containerAddLivro.style.display = "block";
  }

  export function addUsuarios() {
    containerBotoes.style.display = "none";
    containerAddUsuario.style.display = "block";
  }

  export function removerLivro() {
    containerBotoes.style.display = "none";
    containerRemoverLivro.style.display = "block";
  }

  export function removerUsuario() {
    containerBotoes.style.display = "none";
    containerRemoverUsuario.style.display = "block";
  }

  //REMOVER
  botaoRemoverLivroRemover.addEventListener("click", (e) => {
    e.preventDefault();
    let index = listaLivros.findIndex(i => i.id === parseInt(idLivroRemover.value));
    
    if (index !== -1) {
        listaLivros.splice(index, 1);   
        alert("Livro removido com sucesso!");  
    }
    else {
        alert("Nenhum id encontrado!");       
    }
  });

  botaoRemoverUsuarioRemover.addEventListener("click", (e) => {
    e.preventDefault();
    let index = listaUsers.findIndex(i => i.id === parseInt(idUsuarioRemover.value));
    
    if (index !== -1) {
        listaUsers.splice(index, 1);   
        alert("Usuário removido com sucesso!");  
    }
    else {
        alert("Nenhum id encontrado!");       
    }
  });


  botaoAddLivroSalvar.addEventListener("click", (e) => {
    e.preventDefault();

      let livro = {
        id: catalogo.length + 1,
        titulo: tituloLivro.value,
        descricao: descricaoLivro.value,
        valor: valorLivro.value,
        imagem: imagemLivro.value,
        url: urlLivro.value,
        categoria: categoriaLivro.value
      }
      
      catalogo.push(livro);
      localStorage.setItem("catalogo", JSON.stringify(catalogo));
      alert("Livro adicionado com sucesso!");
  });

  botaoAddUsuarioSalvar.addEventListener("click", (e) => {
    e.preventDefault();

    let user = {
        id: users.length + 1,
        cpf: cpfUsuario.value,
        nome: nomeUsuario.value,
        email: emailUsuario.value,
        senha: senhaUsuario.value,
        tipo: "usuario"
      }
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Usuário adicionado com sucesso!");
  });


  btnListaUsuarios.addEventListener("click", listarUsuarios);
  btnListaLivros.addEventListener("click", listarLivros);
  btnAddLivro.addEventListener("click", addLivros);
  btnAddUsuario.addEventListener("click", addUsuarios);
  btnRemoverLivro.addEventListener("click", removerLivro);
  btnRemoverUsuario.addEventListener("click", removerUsuario);
  btnSair.addEventListener("click", function() {
    window.location.href = "../login.html";
  });
  botaoAddLivroVoltar.addEventListener("click", function() {
    containerBotoes.style.display = "block";
    containerAddLivro.style.display = "none";
});

botaoAddUsuarioVoltar.addEventListener("click", function() {
    containerBotoes.style.display = "block";
    containerAddUsuario.style.display = "none";
});

botaoRemoverLivroVoltar.addEventListener("click", function() {
    containerBotoes.style.display = "block";
    containerRemoverLivro.style.display = "none";
});

botaoRemoverUsuarioVoltar.addEventListener("click", function() {
    containerBotoes.style.display = "block";
    containerRemoverUsuario.style.display = "none";
});

//BUSCAR
searchbarAdm.addEventListener("keyup", (e) => {
    
    const filteredUsers = users.filter((item) => {
        const texto = searchbarAdm.value;
        if(texto != "") {
            if((item.cpf.includes(texto)) || (item.nome.includes(texto)) || (item.email.includes(texto))) {
                console.log(item);
            }
        }
    });

    const filteredLivros = catalogo.filter((item) => {
        const texto = searchbarAdm.value;
        if(texto != "") {
            if((item.cpf.includes(texto)) || (item.nome.includes(texto)) || (item.email.includes(texto))) {
                console.log(item);
            }
        }
    });
});