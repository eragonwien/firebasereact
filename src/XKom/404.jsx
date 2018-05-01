import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state= {
      redirect: false
    };
  }
  

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        redirect: true
      });
    }, 5000);
  }
  

  render() {

    if (this.state.redirect) {
      return (
        <Redirect to='/' />
      );
    }

    return (
      <main>
        <Container>
          <Segment inverted>
            <h1>404 Page not found</h1>
            <p>Redirecting to homepage ...</p>
          </Segment>
        </Container>
      </main>
    );
  }
}

export default NotFound;
