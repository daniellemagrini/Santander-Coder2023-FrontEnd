export const chinelos = [
  {
    id: "1",
    marca: "Havaiana",
    nome: "Chinelo Top Flowers",
    preco: 59.90,
    imagem: "product-1.jpg",
    infantil: false,
  },
  {
    id: "2",
    marca: "Havaiana",
    nome: "Chinelo Postcard praia",
    preco: 23.80,
    imagem: "product-2.jpg",
    infantil: true,
  },
  {
    id: "3",
    marca: "Havaiana",
    nome: "Chinelo Postcard Salvador",
    preco: 48.90,
    imagem: "product-3.jpg",
    infantil: false,
  },
  {
    id: "4",
    marca: "Havaiana",
    nome: "Chinelo Slim Noronha",
    preco: 34.50,
    imagem: "product-4.jpg",
    infantil: false,
  },
  {
    id: "5",
    marca: "Havaiana",
    nome: "Chinelo Slim Salvador",
    preco: 69.90,
    imagem: "product-5.jpg",
    infantil: false,
  },
  {
    id: "6",
    marca: "Havaiana",
    nome: "Chinelo Elegance Roxo",
    preco: 33.40,
    imagem: "product-6.jpg",
    infantil: true,
  },
  {
    id: "7",
    marca: "Havaiana",
    nome: "Chinelo surf",
    preco: 58.90,
    imagem: "product-7.jpg",
    infantil: true,
  },
  {
    id: "8",
    marca: "Havaiana",
    nome: "Chinelo Top Max Comfort",
    preco: 23.80,
    imagem: "product-8.jpg",
    infantil: true,
  },
];

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
  const produto = chinelos.find((p) => p.id === idProduto);
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
      src="./assets/img/${produto.imagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${produto.nome}
      </p>
      <p class="text-green-700 text-lg">R$ ${produto.preco.toFixed(2)}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
    </div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
