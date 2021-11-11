import Card from './UI/Card';
import Aluno from './Aluno';

import './ListagemAlunos.css';

const ListagemAlunos = ({alunos}) => {
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