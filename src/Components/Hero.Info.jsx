import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeroInfo extends Component {

  render() {
    const {hero} = this.props;

    if (!hero) {
      return <h1>No hero</h1>;
    }
    return (
      <div>
        <ul>
          <li>{hero.firstname} {hero.lastname}</li>
          <li>{hero.gender}</li>
          <li>{hero.citizenship}</li>
        </ul>
      </div>
    );
  }
}

HeroInfo.propTypes = {
  hero: PropTypes.object
};

export default HeroInfo;