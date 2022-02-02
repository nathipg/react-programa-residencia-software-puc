import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import './CadastroAluno.css';

const CadastroAluno = ({onCadastroAluno}) => {
  const alunoInitialState = {
    nome: '',
    idade: '',
    telefone: '',
  };
  const [aluno, setAluno] = useState(alunoInitialState);
  const [isValid, setIsValid] = useState(false);

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
      <h5>Cadastro de Alunos</h5>
      <Form onSubmit={submitHandler} validated={isValid}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text" 
            name="nome"
            value={aluno.nome}
            onChange={alunoChangeHandler}
            placeholder="Nome"
            required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Idade</Form.Label>
          <Form.Control
            type="text" 
            name="idade"
            value={aluno.idade}
            onChange={alunoChangeHandler}
            placeholder="Idade"
            required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text" 
            name="telefone"
            value={aluno.telefone}
            onChange={alunoChangeHandler}
            placeholder="Telefone"
            required />
        </Form.Group>
        <Button variant="primary" type="submit">Cadastrar Aluno</Button>
      </Form>
    </div>
  );
}

export default CadastroAluno;