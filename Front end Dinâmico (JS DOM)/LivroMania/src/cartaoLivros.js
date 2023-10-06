import { catalogo } from "./livros.js";

const searchbar = document.querySelector("#searchbar");


export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<a href="${produtoCatalogo.url}">
            <img
            src="./img_livros/${produtoCatalogo.imagem}"
            alt="${produtoCatalogo.titulo}"/>
            </a>`;

    document.getElementById(`${produtoCatalogo.categoria}`).innerHTML += cartaoProduto;
  }
}

//BUSCAR
 /*export const searchLivros = (search) => {
    const catalogo = document.querySelectorAll(".livro");

    catalogo.forEach((livro) => {
        
        }
};

searchbar.addEventListener("keyup", (e) => {
    const search = e.target.value;

    searchLivros(search);
});*/
