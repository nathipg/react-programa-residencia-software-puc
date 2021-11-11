import { useState } from 'react';

const CadastroAluno = ({onCadastroAluno}) => {
  const alunoInitialState = {
    nome: '',
    idade: '',
    telefone: '',
  };
  const [aluno, setAluno] = useState(alunoInitialState);

  const alunoChangeHandler = event => {
    setAluno(prevState => ({...prevState, [event.target.name]: event.target.value}));
  };

  const submitHandler = event => {
    event.preventDefault();

    onCadastroAluno(aluno);

    setAluno(alunoInitialState);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="cadastro_aluno">
          <label>Nome</label>
          <input 
            type="text" 
            name="nome"
            value={aluno.nome}
            onChange={alunoChangeHandler} />
        </div>
        <div className="cadastro_aluno">
          <label>Idade</label>
          <input 
            type="text"
            name="idade"
            value={aluno.idade}
            onChange={alunoChangeHandler} />
        </div>
        <div className="cadastro_aluno">
          <label>Telefone</label>
          <input 
            type="text"
            name="telefone"
            value={aluno.telefone}
            onChange={alunoChangeHandler} />
        </div>
        <div className="cadastro_aluno__action">
          <button type="submit">Cadastrar Aluno</button>
        </div>
      </form>
    </div>
  );
}

export default CadastroAluno;