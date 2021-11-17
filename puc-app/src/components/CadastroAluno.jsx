import { useState } from 'react';

import Button from './UI/Button';

import './CadastroAluno.css';

const CadastroAluno = ({onCadastroAluno}) => {
  const alunoInitialState = {
    nome: '',
    idade: '',
    telefone: '',
  };
  const [aluno, setAluno] = useState(alunoInitialState);
  const [isValid, setIsValid] = useState(true);

  const alunoChangeHandler = event => {
    if(aluno.nome.trim().length > 0
      && aluno.idade.trim().length > 0
      && aluno.telefone.trim().length > 0) {
        setIsValid(true);
    }
    setAluno(prevState => ({...prevState, [event.target.name]: event.target.value}));
  };

  const submitHandler = event => {
    event.preventDefault();

    if(aluno.nome.trim().length === 0
      || aluno.idade.trim().length === 0
      || aluno.telefone.trim().length === 0) {
        setIsValid(false);
        return;
    }

    onCadastroAluno(aluno);

    setAluno(alunoInitialState);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={`cadastro_aluno ${isValid ? '' : 'invalid'}`}>
          <label>Nome</label>
          <input 
            type="text" 
            name="nome"
            value={aluno.nome}
            onChange={alunoChangeHandler} />
        </div>
        <div className={`cadastro_aluno ${isValid ? '' : 'invalid'}`}>
          <label>Idade</label>
          <input 
            type="number"
            name="idade"
            value={aluno.idade}
            onChange={alunoChangeHandler} />
        </div>
        <div className={`cadastro_aluno ${isValid ? '' : 'invalid'}`}>
          <label>Telefone</label>
          <input 
            type="text"
            name="telefone"
            value={aluno.telefone}
            onChange={alunoChangeHandler} />
        </div>
        <div className="cadastro_aluno__action">
          <Button type="submit">Cadastrar Aluno</Button>
        </div>
      </form>
    </div>
  );
}

export default CadastroAluno;