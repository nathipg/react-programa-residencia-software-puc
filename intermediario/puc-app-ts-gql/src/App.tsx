import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const lazyHome = React.lazy(() => import('./pages/Home'));
const lazyAlunos = React.lazy(() => import('./pages/Alunos'));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <React.Suspense fallback="Loading...">
          <Route path="/" exact component={lazyHome} />
          <Route path="/alunos" exact component={lazyAlunos} />
        </React.Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
