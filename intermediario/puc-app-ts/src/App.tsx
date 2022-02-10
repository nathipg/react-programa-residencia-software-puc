import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Alunos } from './pages/Alunos';
import { Home } from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/alunos" exact component={Alunos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
