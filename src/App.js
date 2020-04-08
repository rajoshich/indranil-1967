import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Main} from './Components/Main';
import {Project} from './Components/Project';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
// import icons and fa

export class App extends Component {
  render() {
  return (
    <main>
      <Navbar />
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/projects' component={Project} />
      <Redirect to="/" />
    </Switch>
  </main>
  );
}
}

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav>
          <li><NavLink to="/" activeClassName="activeLink">Home</NavLink></li>
          <li><NavLink to="/projects" activeClassName="activeLink">Projects</NavLink></li>
          <li><NavLink to="/" activeClassName="activeLink">Contact</NavLink></li>
        </ nav>
      </header>
    );
  }
}

export default App;
