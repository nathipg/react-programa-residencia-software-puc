import ListagemAlunos from './components/ListagemAlunos';
import Header from './Header';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <h1>Hello World</h1>
      <ListagemAlunos />
    </div>
  );
};

export default App;
