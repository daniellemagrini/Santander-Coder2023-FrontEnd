function generateColor() {

    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++)
    {
      color += letters[Math.floor(Math.random() * 16)];
    }    

    return color;    
  }


  function changeBackgroundColor() {

    let background = document.body;
    background.style.backgroundColor = generateColor()
    
    return background;
  }
  

  function changeAriaLabelButtonChangeBackgroundColor(label) {

    const buttonClick = document.getElementById("buttonChangeBackgroundColor");

    buttonClick.setAttribute("aria-label", label);
  }

  const buttonClick = document.getElementById("buttonChangeBackgroundColor");
  buttonClick.addEventListener(
    "click",
    function () {
        changeAriaLabelButtonChangeBackgroundColor("Clique aqui para mudar novamente a cor de fundo da tela");
    },
    false,
  );