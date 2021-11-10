import Aluno from './Aluno';

import './ListagemAlunos.css';
import Card from './UI/Card';

const ListagemAlunos = () => {
  const alunos = [
    {nome: 'Pissuti', idade: 24, telefone: '(19) 99999-9991'},
    {nome: 'Cauê', idade: 24, telefone: '(19) 99999-9992'},
    {nome: 'Joana', idade: 3, telefone: '(19) 99999-9993'},
  ];

  return (
    <Card>
      <h1>Listagem Alunos</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno, i) => <Aluno key={`aluno${i}`} nome={aluno.nome} idade={aluno.idade} telefone={aluno.telefone} />)}
        </tbody>
      </table>
    </Card>
  );
}

export default ListagemAlunos;