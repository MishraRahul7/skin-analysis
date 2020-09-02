import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UserForm from './UserForm';
import ShowUsers from './ShowUsers';
const App = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <UserForm />} />
      <Route exact path='/view' render={() => <ShowUsers />} />
    </Switch>
  );
};

export default App;
