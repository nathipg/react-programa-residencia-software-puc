import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

import { Aluno } from '../../../types/aluno';

interface AlunoProps {
  onCadastroAluno: (aluno: Aluno) => void
}

export const CadastroAlunos = ({ onCadastroAluno }: AlunoProps) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const submitHandler = () => {
    // onCadastroAluno(aluno);
  };

  return (
    <h1>Cadastro Alunos</h1>
  )
}