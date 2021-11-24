import { useParams } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const DetalhesAlunos = ({alunos}) => {
  const params = useParams();
  const aluno = alunos.find(a => a._id === params.id);

  return (
    <div className="detalhes_aluno">
      <h5>Detalhes do Aluno</h5>
      <ListGroup>
        <ListGroup.Item>ID: {aluno._id}</ListGroup.Item>
        <ListGroup.Item>Npme: {aluno.nome}</ListGroup.Item>
        <ListGroup.Item>Idade: {aluno.idade}</ListGroup.Item>
        <ListGroup.Item>Telefone: {aluno.telefone}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default DetalhesAlunos;