import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
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
              <Route exact path='/Login' component={Login} />
              <Route exact path='/Signup' component={Signup} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
