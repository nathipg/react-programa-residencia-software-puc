var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function soma(x, y) {
    return x + y;
}
var numero1 = 10;
var numero2 = 5;
var resultado = soma(numero1, numero2);
console.log(resultado);
var nomeAlunos;
nomeAlunos = ['A', 'B', 'C'];
// let aluno: { nome: string; idade: number };
var aluno;
aluno = {
    nome: 'Joana',
    idade: 4
};
var alunos;
alunos = [aluno];
function cadastrarAluno(a) {
    return a;
}
var resultadoCadAluno = cadastrarAluno(aluno);
function addItemToArray(array, newItem) {
    return __spreadArray(__spreadArray([], array, true), [newItem], false);
}
var initialArray = [5, 3, 2];
var updatedArray = addItemToArray(initialArray, 9);
