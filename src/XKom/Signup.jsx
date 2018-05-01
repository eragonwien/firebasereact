import React, { Component } from 'react';
import { Container, Form, Button, Segment, Message } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { auth } from '../firebase/firebase';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      success: false,
      message: {
        header: '',
        contents: []
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getMessage = this.getMessage.bind(this);
  }

  render() {
    if (this.state.success) {
      return <Redirect to='/' />;
    }

    let message = this.getMessage();

    return (
      <main>
        <Container >
          {message}
          <Segment inverted>
            <Form onSubmit={this.onSubmit} inverted>
              <Form.Group widths='equal'>
                <Form.Input
                  name='email'
                  type='email'
                  value={this.state.email}
                  label='Email'
                  onChange={this.onChange} />
                <Form.Input
                  name='password'
                  type='password'
                  value={this.state.password}
                  label='Password'
                  onChange={this.onChange} />
              </Form.Group>
              <Button type='submit' inverted>Create</Button>
            </Form>
          </Segment>
        </Container>
      </main>
    );
  }

  onChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    let {email, password, success} = this.state;
    let message = {
      header: '',
      contents: []
    };
    auth.createUserWithEmailAndPassword(email, password).then(() => {
      success = true;
      message.header = 'Submission error';
      message.contents.push('Account created');
    }).catch((error) => {
      let errorMessage = error.code + ': ' + error.message;
      message.header = 'Submission error';
      message.contents.push(errorMessage);
      success = false;
    }).finally(() => {
      this.setState({
        email: '',
        password: '',
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

export default Signup;
