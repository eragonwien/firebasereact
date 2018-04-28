import React, { Component } from 'react';
import { Container, Form, Button, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  

  render() {

    if (this.state.success) {
      return <Redirect to='/' />;
    }

    return (
      <main>
        <Container >
          <Segment inverted color='black'>
            <Form onSubmit={this.onSubmit} inverted>
              <Form.Group widths='equal'>
                <Form.Input
                  name='email'
                  type='email'
                  value={this.state.email}
                  placeholder='Email'
                  onChange={this.onChange} />
                <Form.Input
                  name='password'
                  type='password'
                  value={this.state.password}
                  placeholder='Password'
                  onChange={this.onChange} />
              </Form.Group>
              <Form.Checkbox label='remember me' />
              <Button type='submit'>Log In</Button>
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

  onSubmit() {

    // validate
    let success = true;
    let user = {};
    user.email = this.state.email;
    user.password = this.state.password;
    localStorage.setItem('user', JSON.stringify(user));
    // clean up
    this.setState({
      email: '',
      password: '',
      success: success
    });
  }
}

export default Login;
