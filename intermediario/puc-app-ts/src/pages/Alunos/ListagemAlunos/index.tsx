import { Table } from 'react-bootstrap'

import { Aluno } from '../../../types/aluno'

const ListagemAlunos: React.FC<{ alunos: Aluno[] }> = ({ alunos }) => {
  return (
    <div className="pt-4">
      <h5>Listagem de Alunos</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Telefone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno: Aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.nome}</td>
              <td>{aluno.idade}</td>
              <td>{aluno.telefone}</td>
              <td>{aluno.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ListagemAlunos;