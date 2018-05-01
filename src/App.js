import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Signup from './Components/Signup';
import NotFound from './Components/404';
import Hero from './Components/Hero';
import CreateHero from './Components/CreateHero';
import Test from './Components/Test';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Home' component={Home} />
              <Route exact path='/Login' component={Login} />
              <Route exact path='/Signup' component={Signup} />
              <Route exact path='/Logout' component={Logout} />
              <Route exact path='/Logout' component={Logout} />
              <Route exact path='/Test' component={Test} />
              <Route exact path='/Heroes/:name' component={Hero} />
              <Route exact path='/Create/Hero' component={CreateHero} />
              <Route exact path='/404' component={NotFound} />
              <Redirect to='/404' />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
