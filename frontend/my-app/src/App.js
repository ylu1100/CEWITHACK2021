import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Page/HomePage.js';
import {  BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import LoginSignUp from './Page/LoginSignUp';
import PatientPortal from './Page/PatientPortal';
import ChoicePage from './Page/ChoicePage';
import Done from './Page/Done';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><ChoicePage /></Route>
          <Route exact path='/home'> <HomePage /></Route>
          <Route path='/login' exact> <LoginSignUp /> </Route>
          <Route path='/patient' exact><PatientPortal /></Route> 
          <Route path='/done' exact><Done /></Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
