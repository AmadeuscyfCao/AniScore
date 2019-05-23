import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../HomePage/homepage.jsx';
import Bangumi from '../Bangumi/bangumi.jsx';
import Manga from '../Manga/manga.jsx';
import Login from '../Login/login.jsx';
import  Signup from '../Signup/signup.jsx';
import Logout from '../Logout/logout.jsx';

class App extends Component {
  render() {
    return(
      <HashRouter>
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route exact path = '/bangumi' component = {Bangumi}/>
          <Route exact path = '/manga' component = {Manga}/>
          <Route exact path = '/login' component = {Login}/>
          <Route exact path = '/signup' component = {Signup}/>
          <Route exact path = '/logout' component = {Logout}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
