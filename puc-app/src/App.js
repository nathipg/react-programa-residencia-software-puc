import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import CadastroAluno from './components/CadastroAluno';
import ListagemAlunos from './components/ListagemAlunos';
import DetalhesAlunos from './components/DetalhesAlunos';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const demoData = [];
  const [alunos, setAlunos] = useState(demoData);

  const cadastrarAluno = async (aluno) => {
    const response = await fetch('http://localhost:3001/alunos', {
      method: 'POST',
      body: JSON.stringify(aluno),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
  };

  const fetchAlunosHandler = () => {
    fetch('http://localhost:3001/alunos', {
      method: 'GET',
    }).then(res => {
      if(!res.ok)
        throw new Error('Response not ok');

      return res.json();
    }).then(data => {
      setAlunos(data);
    })
    .catch(err => console.log(err));
  };

  return (
    <Container>
      <Header />
      <Button onClick={fetchAlunosHandler}>Buscar alunos</Button>
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
