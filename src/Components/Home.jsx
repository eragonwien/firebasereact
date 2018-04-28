import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { auth } from '../firebase/firebase';

class Home extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      user: null
    };
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
    return (
      <main>
        <h1>Hello</h1>
        <pre>{JSON.stringify(this.state.user, null, 3)}</pre>
      </main>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object
};


export default Home;
