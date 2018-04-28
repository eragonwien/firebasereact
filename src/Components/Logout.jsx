import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { Container, Loader, Message } from 'semantic-ui-react';

class Logout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      success: false,
      message: {
        header: '',
        contents: []
      }
    };
    
    this.logout = this.logout.bind(this);
    this.getMessage = this.getMessage.bind(this);
  }

  componentDidMount() {
    this.logout();
  }
  

  render() {
    if (this.state.success) {
      return <Redirect to='/Home' />;
    }
    if (this.state.success) {
      return <Redirect to='/Login' />;
    }
    let message = this.getMessage();
    return (
      <main>
        <Container>
          {message}
          <h1>Logging out  <Loader active inline /></h1>
        </Container>
      </main>
    );
  }

  logout() {
    let success = this.state.success;
    let message = {
      header: '',
      contents: []
    };

    // sign out from firebase
    auth.signOut().then(() => {
      // success
      success = true;
    }).catch((error) => {
      // error
      message.header = 'Logout error';
      message.contents.push(error.code + ': ' + error.message);
    }).finally(() => {
      this.setState({
        success: success,
        message: message
      });
    });
  }

  getMessage() {

    let message = this.state.message;
    let color = (this.state.success) ? 'green' : 'red';
    if (!message || !message.header) {
      return null;
    }
    return (
      <Message color={color}>
        <Message.Header>{message.header}</Message.Header>
        <Message.List items={message.contents} />
      </Message>
    );
  }
}

export default Logout;
