import { useState } from 'react';

import { Container } from '../../containers';

import { CadastroAlunos } from './CadastroAlunos';
import ListagemAlunos from './ListagemAlunos';

import { Aluno } from '../../types/aluno';

import { usePost } from '../../hooks/customHooks';

export const Alunos = () => {
  const [alunos, setAlunos] = useState<Aluno[]>([
    {
      id: 'IDUNICO',
      nome: 'Pissuti',
      idade: 24,
      email: 'email@email.com',
      telefone: '123123123',
    },
  ]);

  const apiPost = usePost<aluno>();

  const cadastrarAluno = (aluno: Aluno) => {
    console.log('Cadastrar Aluno');
    await apiPost(aluno);
    setAlunos([...alunos, aluno]);
  };

  return (
    <Container>
      <h1>Alunos</h1>

      <CadastroAlunos onCadastroAluno={cadastrarAluno} />
      <ListagemAlunos alunos={alunos} />
    </Container>
  );
};
