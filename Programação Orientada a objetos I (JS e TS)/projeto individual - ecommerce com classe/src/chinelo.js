export class Chinelo {
  id;
  descricao;
  preco;
  imagem;
  infantil;

  constructor(id, descricao, preco, imagem, infantil) {
    this.id = id;
    this.descricao = descricao;
    this.preco = preco;
    this.imagem = imagem;
    this.infantil = infantil;
  }

  get id() {
    return this.id;
  }

  set id(id) {
    this.id = id;
  }

  get descricao() {
    return this.id;
  }

  set descricao(descricao) {
    this.descricao = descricao;
  }

  get preco() {
    return this.preco;
  }

  set preco(preco) {
    this.preco = preco;
  }

  get imagem() {
    return this.imagem;
  }

  set imagem(imagem) {
    this.imagem = imagem;
  }

  get infantil() {
    return this.infantil;
  }

  /**
   * @param {boolean} infantil
   */
  set infantil(infantil) {
    this.infantil = infantil;
  }
}

export const chinelosBD = []

export const CadastrarChinelos = () => {
    const chinelo1 = new Chinelo(1, "Chinelo Top Flowers", 59.90, "product-1.jpg", false);
    const chinelo2 = new Chinelo(2, "Chinelo Postcard praia", 23.80, "product-2.jpg", true);
    const chinelo3 = new Chinelo(3, "Chinelo Postcard Salvador", 48.90, "product-3.jpg", false);
    const chinelo4 = new Chinelo(4, "Chinelo Slim Noronha", 34.50, "product-4.jpg", false);
    const chinelo5 = new Chinelo(5, "Chinelo Slim Salvador", 69.90, "product-5.jpg", false);
    const chinelo6 = new Chinelo(6, "Chinelo Elegance Roxo", 33.40, "product-6.jpg", true);
    const chinelo7 = new Chinelo(7, "Chinelo surf", 58.90, "product-7.jpg", true);
    const chinelo8 = new Chinelo(8, "Chinelo Top Max Comfort", 23.80, "product-8.jpg", true);

    chinelosBD.push(chinelo1, chinelo2, chinelo3, chinelo4, chinelo5, chinelo6, chinelo7, chinelo8);
    console.log(chinelosBD);
}

//Chinelo.prototype.marca = "Havaiana"

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = chinelosBD.find((p) => p.id == idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article"); 
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `
    <img
      src="../assets/img/${produto.imagem}"
      alt="Carrinho: ${produto.descricao}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${produto.descricao}
      </p>
      <p class="text-green-700 text-lg">R$ ${produto.preco.toFixed(2)}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
    </div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
