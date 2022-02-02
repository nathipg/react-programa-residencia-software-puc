function soma(x: number, y: number) {
  return x + y;
}

let numero1 = 10;
let numero2 = 5;

const resultado = soma(numero1, numero2);

console.log(resultado);

let nomeAlunos: string[];

nomeAlunos = ['A', 'B', 'C'];

type Aluno = { nome: string; idade: number };

// let aluno: { nome: string; idade: number };
let aluno: Aluno;

aluno = {
  nome: 'Joana',
  idade: 4,
};

let alunos: Aluno[];

alunos = [aluno];

function cadastrarAluno(a: Aluno) {
  return a;
}

let resultadoCadAluno = cadastrarAluno(aluno);

function addItemToArray<T>(array: T[], newItem: T) {
  return [...array, newItem];
}

let initialArray = [5, 3, 2];

const updatedArray = addItemToArray(initialArray, 9);
