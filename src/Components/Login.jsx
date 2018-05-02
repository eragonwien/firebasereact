import React, { Component } from 'react';
import { auth } from '../firebase/firebase';
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      message: '',
      success: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  

  render() {
    const {message, success} = this.state;
    if (success) {
      return <Redirect to='/' />;
    }

    return (
      <div>
        <h1>Login</h1>
        <p>{message}</p>
        <form onSubmit={this.onSubmit} >
          <input type="email" name="email" value={this.state.email} placeholder="email" onChange={this.onChange} />
          <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.onChange} />
          <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }

  onChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    let {email, password, success, message} = this.state;

    auth.signInWithEmailAndPassword(email, password).then(() => {
      success = true;
    }).catch((error) => {
      success = false;
      message = error.code + ': ' + error.message;
      alert(message);
    }).finally(() => {
      this.setState({
        email: '',
        password: '',
        success,
        message
      });
    });
  }
}

export default Login;