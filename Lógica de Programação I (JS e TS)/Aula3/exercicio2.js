// EXERCICIO
// Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
// que contém nome, nota1 e nota2. Use o for para percorer esse array
// e calcular a média das duas notas de cada aluno
// Ao final, imprimir o nome do aluno e a sua média

const listaDeAlunos = [
    { nome: 'João', nota1: 8, nota2: 7 },
    { nome: 'Maria', nota1: 9, nota2: 8 },
    { nome: 'Carlos', nota1: 6, nota2: 5 },
    { nome: 'Ana', nota1: 7, nota2: 6 },
    { nome: 'Pedro', nota1: 10, nota2: 9 },
    { nome: 'Lúcia', nota1: 8, nota2: 7 },
    { nome: 'Fernando', nota1: 7, nota2: 6 },
    { nome: 'Camila', nota1: 9, nota2: 8 },
    { nome: 'Rafael', nota1: 6, nota2: 5 },
    { nome: 'Juliana', nota1: 10, nota2: 9 }
  ];

for (aluno of listaDeAlunos) {
    aluno.media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome do Aluno: ${aluno.nome} 
    Média: ${aluno.media}\n`);
}