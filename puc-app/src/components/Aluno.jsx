import { useHistory } from 'react-router-dom';

import './Aluno.css';

const Aluno = ({aluno}) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push(`/alunos/${aluno._id}`);
  };

  return (
    <tr className="aluno_row" onClick={clickHandler}>
      <td>{aluno.nome}</td>
      <td>{aluno.idade}</td>
      <td>{aluno.telefone}</td>
    </tr>
  );
}

export default Aluno;