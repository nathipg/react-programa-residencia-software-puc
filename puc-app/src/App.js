import {useState} from 'react';
import {Button, Container} from 'react-bootstrap';

import Header from './Header';
import CadastroAluno from './components/CadastroAluno';
import ListagemAlunos from './components/ListagemAlunos';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const demoData = [
    {nome: 'Pissuti', idade: 24, telefone: '(19) 99999-9991'},
    {nome: 'Cauê', idade: 24, telefone: '(19) 99999-9992'},
    {nome: 'Joana', idade: 3, telefone: '(19) 99999-9993'},
  ];
  const [alunos, setAlunos] = useState(demoData);

  const cadastrarAluno = aluno => {
    setAlunos(prevState => [aluno, ...prevState]);
  };

  return (
    <Container>
      <Button>Submit</Button>
      <Header />
      <CadastroAluno onCadastroAluno={cadastrarAluno} />
      <ListagemAlunos alunos={alunos} />
    </Container>
  );
};

export default App;
