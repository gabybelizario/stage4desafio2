/*

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:

*/

let student = prompt("Qual é seu nome")

let noteOne = prompt("Digite a sua nota da primeira prova")
let noteTwo = prompt("Digite a sua nota da segunda prova")

let examNotes = ((Number(noteOne) + Number(noteTwo)) / 2)

let result = examNotes > 7

examNotes = examNotes.toFixed(1)

if (result) {
  alert(`Parabens ${student} voce passou no concurso, sua nota foi ${examNotes}.`)
} else if (examNotes < 7) {
  alert(`${student} voce nao passou no concurso, sua nota foi ${examNotes}.`)
} 