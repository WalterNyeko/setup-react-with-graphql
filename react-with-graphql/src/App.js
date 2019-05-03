import React from 'react';
import { graphql } from 'react-apollo';
import './App.css';
import GET_USER_INFO from '../src/graphql/queries/TestQuery';


const App = (props) => {
  return (
    <div className="App">
      {console.log(props)}
    </div>
  );
}

export default graphql(GET_USER_INFO, {name: 'usersInfo'})(App);
