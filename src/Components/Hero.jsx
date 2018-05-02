import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { heroesRef } from '../firebase/firebase';
import HeroInfo from './Hero.Info';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: null
    };

    this.loadHero = this.loadHero.bind(this);
  }
  
  componentDidMount() {
    let heroId = this.props.match.params.id;
    this.loadHero(heroId);
  }

  componentWillReceiveProps(newProps) {
    let oldId = this.props.match.params.id;
    let newId = newProps.match.params.name;
    const heroId = (oldId !== newId) ? newId : oldId;
    this.loadHero(heroId);
  }

  render() {
    const {hero} = this.state;
    return (
      <div>
        <HeroInfo hero={hero} />
      </div>
    );
  }

  loadHero(heroId) {
    this.heroRef = heroesRef.child(heroId);
    this.heroRef.off();
    this.heroRef.on('value', (data) => {
      let hero = data.val();
      hero.id = data.key;
      this.setState({
        hero
      });
    });
  }
}

Hero.propTypes = {
  match: PropTypes.object
};

export default Hero;