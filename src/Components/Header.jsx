import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Header extends Component {
  constructor(props) {
    super(props);
    
    this.onLogout = this.onLogout.bind(this);
  }
  

  render() {
    return (
      <div>
        <header>
          <Menu inverted>
            <Menu.Menu position='left'>
              <Menu.Item header as={ Link } to='Home'>Home</Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
              <Menu.Item header as={ Link } to='Login'>Log In</Menu.Item>
              <Menu.Item header as={ Link } to='Signup'>Sign Up</Menu.Item>
              <Menu.Item header as={ Link } to='Logout'>Log Out</Menu.Item>
            </Menu.Menu>
          </Menu>
        </header>
      </div>
    );
  }

  onLogout() {
    
  }
}

export default Header;
