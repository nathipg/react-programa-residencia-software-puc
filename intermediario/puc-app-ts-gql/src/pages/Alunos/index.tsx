import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { Container } from '../../containers';

import { CadastroAlunos } from './CadastroAlunos';
import ListagemAlunos from './ListagemAlunos';

import { Aluno } from '../../types/aluno';

import { LOAD_ALUNOS } from '../../graphql/Queries';
import { CREATE_ALUNO_MUTATION } from '../../graphql/Mutations';

const Alunos = () => {
  const [alunos, setAlunos] = useState<Aluno[]>([]);

  const { data, loading, error } = useQuery(LOAD_ALUNOS);
  const [createAluno, { error: errorMutation }] = useMutation(
    CREATE_ALUNO_MUTATION
  );

  useEffect(() => {
    if (data) {
      setAlunos(data.getAllAlunos);
    }
  }, [data]);

  const cadastrarAluno = async (aluno: Aluno) => {
    const response = await createAluno({
      variables: {
        nome: aluno.nome,
        idade: aluno.idade,
        telefone: +aluno.telefone,
        email: aluno.email,
      },
    });

    if (errorMutation) {
      console.error(errorMutation);
      return;
    }

    setAlunos([
      ...alunos,
      {
        id: response.data.createAluno.id,
        ...aluno,
      },
    ]);
  };

  return (
    <Container>
      <h1>Alunos</h1>

      <CadastroAlunos onCadastroAluno={cadastrarAluno} />
      <ListagemAlunos alunos={alunos} />
    </Container>
  );
};

export default Alunos;
