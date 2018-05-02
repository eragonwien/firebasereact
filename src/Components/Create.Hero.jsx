import React, { Component } from 'react';
import { auth, heroesRef } from '../firebase/firebase';

class CreateHero extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
      firstname: '',
      lastname: '',
      secret: '',
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
          <input type="text" name="firstname" value={this.state.firstname} placeholder="firstname" onChange={this.onChange} />
          <input type="text" name="lastname" value={this.state.lastname} placeholder="lastname" onChange={this.onChange} />
          <input type="text" name="secret" value={this.state.secret} placeholder="secret" onChange={this.onChange} />
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
    let {success, message, firstname, lastname, secret} = this.state;

    heroesRef.push().set({
      firstname,
      lastname,
      secret
    }).then(() => {
      success = true;
      message = 'new hero added';
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

export default CreateHero;