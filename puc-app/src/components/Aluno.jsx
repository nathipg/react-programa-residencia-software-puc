const Aluno = ({nome, idade, telefone}) => {
  return (
    <tr>
      <td>{nome}</td>
      <td>{idade}</td>
      <td>{telefone}</td>
    </tr>
  );
}

export default Aluno;