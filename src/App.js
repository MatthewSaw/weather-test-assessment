import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Result from './pages/result';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
