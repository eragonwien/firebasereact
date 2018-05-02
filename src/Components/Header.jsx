import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
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
    const {user} = this.state;
    const email = (user) ? user.email : 'Guest';
    return (
      <header>
        <h1>{email}</h1>
        <nav>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/heroes" >Heroes</Link></li>
            <li><Link to="/login" >Login</Link></li>
            <li><Link to="/signup" >Signup</Link></li>
            <li><Link to="/logout" >Logout</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;