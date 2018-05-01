import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { Image, Grid, Segment, List, Dimmer, Loader } from 'semantic-ui-react';
import { firebase } from '../firebase/firebase';


class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hero: {},
      imageUrl: '',
      redirect: false
    };

    this.heroInfo = this.heroInfo.bind(this);
    this.heroAttributes = this.heroAttributes.bind(this);
    this.getHero = this.getHero.bind(this);
    this.getHeroImage = this.getHeroImage.bind(this);
  }
  
  componentDidMount() {
    this.getHero();
    this.getHeroImage();
  }

  render() {
    let {imageUrl, hero, redirect} = this.state;

    if (redirect) {
      return <Redirect to='/Home' />; 
    }

    let heroInfo = this.heroInfo();
    let heroPowers = this.heroAttributes('powers');
    let heroAbilities = this.heroAttributes('abilities');
    let heroFriends = this.heroAttributes('friends');
    let heroEnemies = this.heroAttributes('enemies');
    let loader = (!imageUrl || !hero) ? this.loader() : null; 
    return (
      <main>
        {loader}        
        <Segment inverted>
          <Grid celled='internally' stackable>
            <Grid.Column width={3}>
              <Image src={imageUrl} size='medium' />
            </Grid.Column>
            <Grid.Column width={10}>
              {heroInfo}
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src={imageUrl} size='medium' />
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment inverted>
          <Grid celled='internally' stackable>
            <Grid.Column width={4}>{heroPowers}</Grid.Column>
            <Grid.Column width={4}>{heroAbilities}</Grid.Column>
            <Grid.Column width={4}>{heroFriends}</Grid.Column>
            <Grid.Column width={4}>{heroEnemies}</Grid.Column>
          </Grid>
        </Segment>
      </main>
    );
  }

  heroInfo() {
    let {hero} = this.state;
    if (!hero) {
      return null;
    }
    return (
      <div>
        <h2>Information</h2>
        
        <Grid inverted>
          <Grid.Row>
            <Grid.Column width={6}>Real Name: </Grid.Column>
            <Grid.Column width={10}>{hero.firstname + ' ' + hero.lastname}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>Gender: </Grid.Column>
            <Grid.Column width={10}>{hero.gender}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>Citizenship: </Grid.Column>
            <Grid.Column width={10}>{hero.citizenship}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>Secret Identity: </Grid.Column>
            <Grid.Column width={10}>{hero.secret}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>Species: </Grid.Column>
            <Grid.Column width={10}>{hero.species}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>Date of Birth: </Grid.Column>
            <Grid.Column width={10}>{hero.birthday}</Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  heroAttributes(type) {
    let {hero} = this.state;
    if (!hero || !hero[type]) {
      return null;
    }
    let types = Object.keys(hero[type]);
    let result = types.map((item) => {
      return (
        <List.Item key={item}>
          <NavLink to={'/Heroes/' + item}>{item}</NavLink>
        </List.Item>
      );
    });

    return (
      <div>
        <h2>{type.toUpperCase()}</h2>
        <List relaxed>{result}</List>
      </div>
    );
  }

  getHero() {
    const rootRef = firebase.database().ref();
    const name = this.props.match.params.name;
    const heroesRef = rootRef.child('Heroes').child(name);

    heroesRef.on('value', (snap) => {
      let hero = snap.val();
      if (hero) {
        hero.id = name;
      }
      this.setState({
        hero: hero,
        redirect: !hero
      });
    });
  }

  getHeroImage() {
    const name = this.props.match.params.name;
    const imageRef = firebase.storage().ref('heroesreactor/' + name + '.jpg');
    imageRef.getDownloadURL().then((url) => {
      this.setState({
        imageUrl: url
      });
    }).catch(() =>{
      this.setState({
        imageUrl: '/images/captainamerica.jpg'
      });
    });
  }

  loader() {
    return <Dimmer active><Loader size='large'>Loading</Loader></Dimmer>;
  }
}

Hero.propTypes = {
  match: PropTypes.object
};

export default Hero;
