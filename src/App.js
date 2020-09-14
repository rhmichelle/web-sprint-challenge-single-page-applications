import React from "react";
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Pizza from './Components/Pizza';

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/pizza'>
          <Pizza />
        </Route>
        <Route path= '/'>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
