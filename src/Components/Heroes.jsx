import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { heroesRef } from '../firebase/firebase';

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      loading: true
    };

    this.heroesListing = this.heroesListing.bind(this);
    this.addHeroToList = this.addHeroToList.bind(this);
    this.updateHeroInList = this.updateHeroInList.bind(this);
    this.removeHeroFromList = this.removeHeroFromList.bind(this);
  }
  

  componentDidMount() {
    heroesRef.on('child_added', (data) => {
      this.addHeroToList(data.key, data.val());
    });
    heroesRef.on('child_changed', (data) => {
      this.updateHeroInList(data.key, data.val());
    });
    heroesRef.on('child_removed', (data) => {
      this.removeHeroFromList(data.key);
    });
  }

  componentWillUnmount() {
    heroesRef.off('child_added');
    heroesRef.off('child_changed');
    heroesRef.off('child_removed');
  }

  render() {
    const {heroes, loading} = this.state;
    let heroListing;
    
    if (loading) {
      return <h1>Loading</h1>;
    }
    if (!heroes) {
      heroListing = <h1>No Hero found</h1>;
    } else {
      heroListing = this.heroesListing();
    }
    return (
      <div>
        <h1>Heroes</h1>
        <p><Link to='/create/hero' >Create new hero</Link></p>
        <ul>{heroListing}</ul>
      </div>
    );
  }

  heroesListing() {
    const {heroes} = this.state;
    let listing = heroes.map((hero) => {
      return (
        <li key={hero.id}>
          <Link to={'/heroes/' + hero.id}>{hero.secret}</Link>
        </li>
      );
    });
    return listing;
  }

  addHeroToList(heroId, hero) {
    hero.id = heroId;
    let {heroes} = this.state;
    heroes.push(hero);
    this.setState({
      heroes,
      loading: false
    });
  }

  updateHeroInList(heroId, updatedValue) {
    let {heroes} = this.state;
    const heroIndex = heroes.findIndex( hero => hero.id === heroId);
    let hero = updatedValue;
    hero.id = heroId;
    heroes[heroIndex] = hero;
    this.setState({
      heroes
    }); 
  }

  removeHeroFromList(heroId) {
    let {heroes} = this.state;
    const heroIndex = heroes.findIndex( hero => hero.id === heroId);
    heroes.splice(heroIndex, 1);
    this.setState({
      heroes
    }); 
  }
}

export default Heroes;