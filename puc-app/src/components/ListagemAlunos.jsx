import Aluno from './Aluno';

import { Table } from 'react-bootstrap';

import './ListagemAlunos.css';

const ListagemAlunos = ({alunos}) => {
  let alunosJsx = <tr><td colSpan="3">Nenhum aluno encontrado</td></tr>;

  if(alunos.length > 0) {
    alunosJsx = alunos.map((aluno, i) => <Aluno key={i} aluno={aluno} />);
  }

  return (
    <div>
      <h1>Listagem Alunos</h1>
      <Table striped bordered hover>
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
      </Table>
    </div>
  );
}

export default ListagemAlunos;