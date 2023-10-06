import { users } from "./src/users.js";

const btnLogin = document.getElementById("btnLogin");
const esqueceuSuaSenha = document.getElementById("esqueceuSuaSenha");
const seuEmail = document.getElementById("seuEmail");
const btnCadastrar = document.getElementById("btnCadastrar");
const senha = document.querySelector("#suaSenha");
const senhaNaoValida = document.querySelector("#senhaNaoValida");
const emailNaoValido = document.querySelector("#emailNaoValido");



//EMAIL
export function validarEmail() {
  let email = seuEmail.value.toLowerCase();
  let regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  let result = regex.test(email);
  if (result == false) {
    emailNaoValido.textContent = "E-mail inválido!";
    return false;
  }
  else {
    emailNaoValido.textContent = "";
    return true;
  }
}

seuEmail.addEventListener("blur", validarEmail);
 
//SENHA
let mostrarSenha = document.querySelector(".mostrarSenha");
mostrarSenha.onclick = function () {
  if (senha.type === "password") {
    senha.setAttribute("type", "text");
    mostrarSenha.classList.add("hide");
  } 
  else {
    senha.setAttribute("type", "password");
    mostrarSenha.classList.remove("hide");
  }
};

//RECUPERAR SENHA
export function irRecuperacaoSenha() {
  window.location.href = "./recuperarSenha.html";
}

esqueceuSuaSenha.addEventListener("click", irRecuperacaoSenha);

//CADASTRAR-SE
export function irCadastrarUsuario() {
  window.location.href = "./cadastroUsuario.html";
}

btnCadastrar.addEventListener("click", irCadastrarUsuario);

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if((validarEmail)) {
    let listaUsers = JSON.parse(localStorage.getItem('users'));
    let index = listaUsers.findIndex(i => i.email === seuEmail.value);
    
    if (index !== -1) {
      if(listaUsers[index].senha === senha.value) {
        if(listaUsers[index].tipo === "usuario") {
          window.location.href = "./src/home.html";
        }  
        else if(listaUsers[index].tipo === "adm") {
          window.location.href = "./src/adm.html";
        }        
      }
      else {
        senhaNaoValida.textContent = "Senha Incorreta";
      }
    } 
    else {
      emailNaoValido.textContent = "Usuário não cadastrado!";
    }  
  }
});





