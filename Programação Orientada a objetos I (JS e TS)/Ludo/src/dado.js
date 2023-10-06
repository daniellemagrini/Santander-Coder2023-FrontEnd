//Gerar um número aleatório de 1 a 6 que corresconde as cores
const dadoGif = document.getElementById("dadoGif");
const dadoFace1 = document.getElementById("dadoFace1");
const dadoFace2 = document.getElementById("dadoFace2");
const dadoFace3 = document.getElementById("dadoFace3");
const dadoFace4 = document.getElementById("dadoFace4");
const dadoFace5 = document.getElementById("dadoFace5");
const dadoFace6 = document.getElementById("dadoFace6");
//const dados = [...document.querySelectorAll(".facesDado")];


const dados = [dadoFace1, dadoFace2, dadoFace3, dadoFace4, dadoFace5, dadoFace6];
//dadoGif.addEventListener("click", jogarDado());
dadoGif.onclick = () => jogarDado();

export async function sortearNumDado() {
  let num = Math.floor(Math.random() * 6 + 1);
  return num;
}

export function alterarImgDado(num) {
  dadoGif.classList.add("hidden");
  document.getElementById(`dadoFace${num}`).classList.remove("hidden");
}

export function esconderFacesDados() {
  dadoGif.classList.remove("hidden");
  document.getElementsByClassName(`facesDado`).classList.add("hidden");
}

export function jogarDado() {
  alterarImgDado(sortearNumDado());
}