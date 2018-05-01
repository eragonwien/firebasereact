import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { auth } from '../firebase/firebase';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
    
    this.getUserControls = this.getUserControls.bind(this);
    this.getUserName = this.getUserName.bind(this);
  }

  componentDidMount() {
    this.subscription = auth.onAuthStateChanged((user) => {
      this.setState({
        user: user
      });
    });
  }

  componentWillUnmount() {
    this.subscription();
  }
  
  render() {
    let userControls = this.getUserControls();
    //let userName = this.getUserName();
    return (
      <div>
        <header>
          <Menu inverted stackable size='large'>
            <Menu.Menu position='left'>
              <Menu.Item header as={ Link } to='/Home'>Home</Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
              <Menu.Item header as={ Link } to='/Create/Hero'>Add</Menu.Item>
              <Menu.Item header as={ Link } to='/Signup'>Sign Up</Menu.Item>
              {userControls}
            </Menu.Menu>
          </Menu>
        </header>
      </div>
    );
  }

  getUserControls() {
    if (this.state.user) {
      return (
        <Menu.Item header as={ Link } to='/Logout'>Log Out</Menu.Item>        
      );
    } else {
      return (
        <Menu.Item header as={ Link } to='/Login'>Log In</Menu.Item>        
      );
    }
  }

  getUserName() {
    if (this.state.user) {
      return (
        <Menu.Item>{this.state.user.email}</Menu.Item>                
      );
    }
  }
}

export default Header;
