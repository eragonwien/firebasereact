import React, { Component } from 'react';
import { Container, Form, Button, Segment } from 'semantic-ui-react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      remember: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  

  render() {
    return (
      <Container >
        <Segment inverted color='brown'>
          <Form onSubmit={this.onSubmit} inverted>
            <Form.Group widths='equal'>
              <Form.Input
                name='email'
                value={this.state.email}
                placeholder='Email'
                onChange={this.onChange} />
              <Form.Input
                name='password'
                value={this.state.password}
                placeholder='Password'
                onChange={this.onChange} />
            </Form.Group>
            <Form.Checkbox label='remember me' />
            <Button type='submit'>Log In</Button>
          </Form>
        </Segment>
      </Container>
    );
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit() {
    alert(this.state.email + ' ' + this.state.password + ' ' + this.state.remember.toString());
    this.setState({
      email: null,
      password: null
    });
  }
}

export default Login;
