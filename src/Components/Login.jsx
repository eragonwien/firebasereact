import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Container, Form, Button, Segment } from 'semantic-ui-react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      save: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  

  render() {
    return (
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
            <Form.Input
              name='save'
              type='checkbox'
              value={this.state.save}
              label='Remember me'
              onChange={this.onChange} />
            <Button type='submit'>Log In</Button>
          </Form>
        </Segment>
      </Container>
    );
  }

  onChange(event) {
    let name = event.target.name;
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
    this.setState({
      [name]: value
    });
  }

  onSubmit() {
    this.setState({
      email: '',
      password: ''
    });

    let user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.onLoginSuccess(user);
  }
}

Login.propTypes = {
  user : PropTypes.bool,
  onLoginSuccess : PropTypes.func
};

export default Login;
