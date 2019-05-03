import React from 'react';
import { graphql } from 'react-apollo';
import './App.css';
import GET_USER_INFO from '../src/graphql/queries/TestQuery';
import Button from '@material-ui/core/Button';

const App = (props) => {
  return (
    <div className="App">
      {console.log(props)}
        <Button variant="contained" color="primary">
          Hello World
        </Button>
    </div>
  );
}

export default graphql(GET_USER_INFO, {name: 'usersInfo'})(App);
