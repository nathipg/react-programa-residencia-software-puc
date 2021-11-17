import Card from './UI/Card';
import Aluno from './Aluno';

import './ListagemAlunos.css';

const ListagemAlunos = ({alunos}) => {
  let alunosJsx = <tr><td colSpan="3">Nenhum aluno encontrado</td></tr>;

  if(alunos.length > 0) {
    alunosJsx = alunos.map((aluno, i) => <Aluno key={i} nome={aluno.nome} idade={aluno.idade} telefone={aluno.telefone} />);
  }

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
          {alunosJsx}
        </tbody>
      </table>
    </Card>
  );
}

export default ListagemAlunos;