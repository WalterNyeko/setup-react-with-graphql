import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../src/containers/home/HomePage';
import { ToastContainer } from "react-toastify";


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </React.Fragment>
    )
  }
}


export default App;
