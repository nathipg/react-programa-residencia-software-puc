import { useState } from 'react';

import { Container } from '../../containers';

import { CadastroAlunos } from './CadastroAlunos';
import ListagemAlunos from './ListagemAlunos';

import { Aluno } from '../../types/aluno';

import { usePost } from '../../hooks/customHooks';

export const Alunos = () => {
  const [alunos, setAlunos] = useState<Aluno[]>([]);

  const { apiPost } = usePost('/alunos');

  const cadastrarAluno = async (aluno: Aluno) => {
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
