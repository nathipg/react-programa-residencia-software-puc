import { gql } from '@apollo/client';

export const CREATE_ALUNO_MUTATION = gql`
  mutation createAluno(
    $nome: String!,
    $idade: Int!,
    $telefone: Int!,
    $email: String!
  ) {
    createAluno(
      nome: $nome,
      idade: $idade,
      telefone: $telefone,
      email: $email
    ) {
      id
    }
  }
`;
