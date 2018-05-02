import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  

  componentWillReceiveProps(newProps) {
    let oldName = this.props.match.params.name;
    let newName = newProps.match.params.name;
    
  }

  render() {
    const name = this.props.match.params.name;

    return (
      <div>
        <h1>{name}</h1>
        <ul>
          <li><Link to='/heroes/ironman'>ironman</Link></li>
          <li><Link to='/heroes/captain'>captain</Link></li>
          <li><Link to='/heroes/thor'>thor</Link></li>
        </ul>
      </div>
    );
  }
}

Hero.propTypes = {
  match: PropTypes.object
};

export default Hero;