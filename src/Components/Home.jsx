import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Home extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      user: null
    };
  }
  

  componentDidMount() {
    let user = localStorage.getItem('user');
    this.setState({
      user: JSON.parse(user)
    });
  }

  render() {
    let email = (this.state.user) ? this.state.user.email : 'Guest';
    return (
      <main>
        <h1>Hello {email}</h1>
      </main>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object
};


export default Home;
