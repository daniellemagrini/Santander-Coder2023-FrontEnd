function validaEmail(email) {
    const email = /\S+@\S+\.\S+/;
    return email.test(email);
  }

  function forcaSenha(senha) {
    let i = 0;
    if (senha.length > 6) {
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
  
  let inputBox = document.querySelector(".inputBox");
  document.addEventListener("keyup", function (e) {
    let senha = document.querySelector("#suaSenha").value;
  
    let forca = forcaSenha(senha);
    if (forca <= 2) {
      inputBox.classList.add("fraca");
      inputBox.classList.remove("moderada");
      inputBox.classList.remove("forte");
    } else if (strength >= 2 && strength <= 4) {
      inputBox.classList.remove("fraca");
      inputBox.classList.add("moderada");
      inputBox.classList.remove("forte");
    } else {
      inputBox.classList.remove("fraca");
      inputBox.classList.remove("moderada");
      inputBox.classList.add("forte");
    }
  });
  
  let senha = document.querySelector("#suaSenha");
  let mostrarSenha = document.querySelector(".mostrarSenha");
  mostrarSenha.onclick = function () {
    if (senha.type === "senha") {
      senha.setAttribute("type", "text");
      show.classList.add("hide");
    } else {
      senha.setAttribute("type", "password");
      show.classList.remove("hide");
    }
  };