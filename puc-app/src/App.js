import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import CadastroAluno from './components/CadastroAluno';
import ListagemAlunos from './components/ListagemAlunos';
import DetalhesAlunos from './components/DetalhesAlunos';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const demoData = [
    {_id: '1', nome: 'Pissuti', idade: 24, telefone: '(19) 99999-9991'},
    {_id: '2', nome: 'Cauê', idade: 24, telefone: '(19) 99999-9992'},
    {_id: '3', nome: 'Joana', idade: 3, telefone: '(19) 99999-9993'},
  ];
  const [alunos, setAlunos] = useState(demoData);

  const cadastrarAluno = aluno => {
    setAlunos(prevState => [aluno, ...prevState]);
  };

  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/alunos" exact>
          <ListagemAlunos alunos={alunos} />
        </Route>
        <Route path="/alunos/:id">
          <DetalhesAlunos alunos={alunos} />
        </Route>
        <Route path="/cadastro">
          <CadastroAluno onCadastroAluno={cadastrarAluno} />
        </Route>
        <Route path="*">
          <Redirect to="/alunos" />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
