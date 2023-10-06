const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalogoProdutos.getElementsByClassName("hidden")
  );

  for (const produto of produtosEscondidos) {
    produto.classList.remove("hidden");
  }
}

function esconderAdultos() {
  exibirTodos();
  const produtosAdultos = Array.from(
    catalogoProdutos.getElementsByClassName("adulto")
  );

  for (const produto of produtosAdultos) {
    produto.classList.add("hidden");
  }
}

function esconderInfantil() {
  exibirTodos();
  const produtosInfantis = Array.from(
    catalogoProdutos.getElementsByClassName("infantil")
  );

  for (const produto of produtosInfantis) {
    produto.classList.add("hidden");
  }
}

export function inicializarFiltros() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-adulto")
    .addEventListener("click", esconderInfantil);
  document
    .getElementById("exibir-infantil")
    .addEventListener("click", esconderAdultos);
}
