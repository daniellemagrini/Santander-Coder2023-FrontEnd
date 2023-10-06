const exitRecuperarSenha = document.querySelector(".exitRecuperarSenha");
const inputEmail = document.getElementById("seuEmail");
const emailNaoValido = document.getElementById("emailNaoValido");


//LOGIN
export function irLogin() {
    window.location.href = "./login.html";
}

exitRecuperarSenha.addEventListener("click", irLogin);

//EMAIL
export function validarEmail() {
    let email = inputEmail.value.toLowerCase();
    let regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    let result = regex.test(email);
    if (result == false) {
      emailNaoValido.textContent = "E-mail inválido!"
    }
    else {
      emailNaoValido.textContent = ""
    }
  }
  
inputEmail.addEventListener("blur", validarEmail);
  
