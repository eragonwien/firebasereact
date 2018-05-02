import React, { Component } from 'react';
import { auth } from '../firebase/firebase';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
      email: '',
      password: '',
      success: false,
      message: ''
    });
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  

  componentDidMount() {
    this.subscription = auth.onAuthStateChanged((user) => {
      this.setState({
        user
      });
    });
  }

  componentWillUnmount() {
    this.subscription();
  }

  render() {
    const view = (this.state.user) ? this.form() : this.info();
    return view;
  }

  info() {
    return (
      <div>
        <h1>Warning</h1>
        <p>This view is restricted to admin only</p>
      </div>
    );
  }

  form() {
    const {message} = this.state;
    return (
      <div>
        <h1>Create new user</h1>
        <p>{message}</p>
        <form onSubmit={this.onSubmit} >
          <input type="email" name="email" value={this.state.email} placeholder="email" onChange={this.onChange} />
          <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.onChange} />
          <input type="submit" value="Create User" />
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
    let {success, message, email, password} = this.state;
    auth.createUserWithEmailAndPassword(email, password).then(() => {
      success = true;
      message = 'Sign Up successfully';
    }).catch((error) => {
      success = false;
      message = error.code + ': ' + error.message;
    }).finally(() => {
      this.setState({
        success,
        message
      });
    });
  }
}

export default Signup;