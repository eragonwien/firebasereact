import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Card, Container, Image, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { firebase } from '../firebase/firebase';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      loading: true
    };

    this.getHeroes = this.getHeroes.bind(this);
  }
  
  
  componentDidMount() {
    const rootRef = firebase.database().ref();
    const heroesRef = rootRef.child('Heroes');

    heroesRef.on('value', (snap) => {
      this.setState({
        heroes: snap.val(),
        loading: false
      });

    });
  }

  render() {
    let heroes = this.getHeroes();
    let loader = (this.state.loading ) ? this.loader() : null;
    return (
      <main>
        {loader}
        <div>
          <Container>
            <Card.Group>
              {heroes}
            </Card.Group>
          </Container>
        </div>
      </main>
    );
  }

  getHeroes() {
    let {heroes} = this.state;
    let result = [];
    if (heroes) {      
      result = Object.keys(heroes).map((key) => {

        let image = null;
        let storage = firebase.storage();
        let imageRef = storage.ref('heroesreactor/' + key + '.jpg');

        imageRef.getDownloadURL().then((url) => {
          image = <Image src={url} />;
        }).catch((error) => {
          alert(error.code);
        }).finally(() => {
          return (
            <Card key={key} as={ Link } to={'/Heroes/' + key}>{image}</Card>
          );
        });

        return (
          <Card key={key} as={ Link } to={'/Heroes/' + key}>
            <Image src={'images/' + key + '.jpg'} />
          </Card>
        );
      });
    }
    return result;
  }

  loader() {
    return <Dimmer active><Loader size='large'>Loading</Loader></Dimmer>;
  }
}

Home.propTypes = {
  user: PropTypes.object
};


export default Home;
