import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { heroesRef } from '../firebase/firebase';

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: null,
      loading: true
    };

    this.heroesListing = this.heroesListing.bind(this);
  }
  

  componentDidMount() {
    heroesRef.orderByKey().on('value', (snap) => {
      const heroes = snap.val();
      this.setState({
        heroes,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    heroesRef.off('value');
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
    let listing = Object.keys(heroes).map((key) => {
      const hero = heroes[key];
      return (
        <li key={key}><Link to={'/heroes/' + key} >{hero.firstname} {hero.lastname}</Link></li>
      );
    });
    return listing;
  }
}

export default Heroes;