import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error404 extends Component {

  render() {
    return (
      <div>
        <h1>404 - Page not found</h1>
        <p><Link to='/'>Back to Home</Link></p>
      </div>
    );
  }
}

export default Error404;