import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { AddPlayer } from './components/AddPlayer';
import { EditPlayer } from './components/EditPlayer';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddPlayer} exact />
          <Route path="/edit/:id" component={EditPlayer} exact />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
