import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';


class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  componentDidMount() {
    this.tryLogout();
  }
  

  render() {
    const {message} = this.state;

    return (
      <div>
        <h1>Logging out</h1>
        <p>{message}</p>
        <p><Link to="/" >Back to Home</Link></p>
      </div>
    );
  }

  tryLogout() {
    let {message} = this.state;

    auth.signOut().then(() => {
      message = 'Logged out successfully';
    }).catch((error) => {
      message = error.code + ': ' + error.message;
    }).finally(() => {
      this.setState({
        message
      });
    });
  }
}

export default Logout;