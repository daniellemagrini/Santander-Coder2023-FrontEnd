function iniciar()
  {
   var button = document.getElementById( "rolar" );
   button.addEventListener( "click", rolar, false );
   dado = document.getElementById( "dado" );
  }

  function rolar()
  {
   setImage( dado );
  }

  function setImage( dado )
  {
   var valor = Math.floor( 1 + Math.random() * 6 );
   dado.setAttribute( "src", "dados-funcao-" + valor + ".png" );
  } 
  window.addEventListener("load", iniciar, false);