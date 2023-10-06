import { users } from "./src/users.js";

const formLogin = document.querySelector(".form");
const seuEmail = document.getElementById("seuEmail");
const exitCadastro = document.querySelector(".exitCadastro");
const seuCPF = document.getElementById("seuCPF");
const suaSenha = document.getElementById("suaSenha");
const seuNome = document.getElementById("seuNome");
const formCadastroUsuario = document.getElementById("formCadastroUsuario");


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

export function validarEmailRepetido() {
  let email = seuEmail.value.toLowerCase();
  let usuario = users.find(function(usuario) {
    if(usuario.email === email) {
      emailNaoValido.textContent = "E-mail já cadastrado!";
      return false;
    }
    else {
      emailNaoValido.textContent = "";
      return true;
    }
  });
}

seuEmail.addEventListener("blur", validarEmail);


//SENHA
function forcaSenha(senha) {
    let i = 0;
    if (senha.length >= 6) {
      i++;
    }
    if (senha.length >= 10) {
      i++;
    }
    if (/[A-Z]/.test(senha)) {
      i++;
    }
    if (/[0-9]/.test(senha)) {
      i++;
    }
    if (/[A-Za-z0-8]/.test(senha)) {
      i++;
    }
    return i;
  }
    
    
  document.addEventListener("keyup", function (e) {
    let senha = document.querySelector("#suaSenha").value;
    
    let forca = forcaSenha(senha);
    
    if (senha.length < 6) {
      formLogin.classList.remove("fraca");
      formLogin.classList.remove("moderada");
      formLogin.classList.remove("forte");
    }
    else if (forca <= 3) {
      formLogin.classList.add("fraca");
      formLogin.classList.remove("moderada");
      formLogin.classList.remove("forte");
    } 
    else if (forca >= 3 && forca <= 4) {
      formLogin.classList.remove("fraca");
      formLogin.classList.add("moderada");
      formLogin.classList.remove("forte");
    } 
    else {
      formLogin.classList.remove("fraca");
      formLogin.classList.remove("moderada");
      formLogin.classList.add("forte");
    }
  });

let senha = document.querySelector("#suaSenha");
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

//LOGIN
export function irLogin() {
    window.location.href = "./login.html";
}

exitCadastro.addEventListener("click", irLogin);


//VALIDAÇÃO DOS CAMPOS
export function validarCPF() {
  if(seuCPF.value.length != 11) {
    cpfNaoValido.textContent = "CPF inválido!";
    return false;
  }
  else {
    cpfNaoValido.textContent = "";
    return true;
  }
}

seuCPF.addEventListener("blur", validarCPF);

export function validarSenha() {
  if(suaSenha.value.length < 6) {
    senhaNaoValido.textContent = "Tamanho tem que ser maior do que 6 dígitos!";
  return false;
  }
  else {
    senhaNaoValido.textContent = "";
  return true;
  }
}

suaSenha.addEventListener("blur", validarSenha);

export function validarNome() {
  if(seuNome.value.length < 3) {
    nomeNaoValido.textContent = "Favor digitar nome completo!";
  return false;
  }
  else {
    nomeNaoValido.textContent = "";
  return true;
  }
}

seuNome.addEventListener("blur", validarNome);

//CADASTRAR
if (localStorage.getItem('user')) {
  let obj = JSON.parse(localStorage.getItem('user'));
  seuCPF.value = obj.cpf;
  seuNome.value = obj.nome;
  seuEmail.value = obj.email;
  suaSenha.value = obj.senha;
}

formCadastroUsuario.addEventListener("submit", (e) => {
  e.preventDefault();
  if((validarCPF) && (validarNome) && (validarEmail) && (validarSenha) && (validarEmailRepetido)) {

    let user = {
      id: users.length + 1,
      cpf: seuCPF.value,
      nome: seuNome.value,
      email: seuEmail.value,
      senha: suaSenha.value,
      tipo: "usuario"
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Cadastro feito com sucesso!");
    irLogin();
  }
  else {
    return;
  }
});



