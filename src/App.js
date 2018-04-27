import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      user: null
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogoutSuccess = this.onLogoutSuccess.bind(this);
    this.homePage = this.homePage.bind(this);
    this.loginPage = this.loginPage.bind(this);
  }
  

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' render={() => this.homePage()} />
              <Route exact path='/Home' render={() => this.homePage()} />
              <Route exact path='/Login' render={() => this.loginPage()} />
              <Route exact path='/Signup' component={Signup} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }

  

  onLoginSuccess(user) {
    this.setState({
      user: user
    });
  }

  onLogoutSuccess() {
    this.setState({
      user: false
    });
  }

  homePage() {
    return (
      <Home user={this.state.user} />
    );
  }

  loginPage() {
    return (
      <Login 
        user={this.state.user}
        onLoginSuccess={this.onLoginSuccess} />
    );
  }
}

export default App;
