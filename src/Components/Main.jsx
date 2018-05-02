import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Heroes from './Heroes';
import CreateHero from './Create.Hero';
import Hero from './Hero';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import Error404 from './404';

class App extends Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/heroes' component={Heroes} />
          <Route exact path='/create/hero' component={CreateHero} />
          <Route path='/heroes/:id' component={Hero} />
          <Route component={Error404} />
        </Switch>
      </main>
    );
  }
}

export default App;