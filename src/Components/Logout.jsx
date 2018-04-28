import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Loader } from 'semantic-ui-react';

class Logout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
    
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.logout();
  }
  

  render() {
    if (this.state.redirect) {
      return <Redirect to='/Home' />;
    }
    return (
      <main>
        <Container>
          <h1>Logging out  <Loader active inline /></h1>
        </Container>
      </main>
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.setState({
      redirect: true
    });
  }
}

export default Logout;
