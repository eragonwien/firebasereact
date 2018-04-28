import React, { Component } from 'react';
import { Container, Form, Button, Segment } from 'semantic-ui-react';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <main>
        <Container >
          <Segment inverted color='black'>
            <Form onSubmit={this.onSubmit} inverted>
              <Form.Group widths={2} unstackable>
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
              <Form.Group widths={2}>
                <Form.Input
                  name='firstname'
                  type='text'
                  value={this.state.firstname}
                  placeholder='Firstname'
                  onChange={this.onChange} />
                <Form.Input
                  name='lastname'
                  type='text'
                  value={this.state.lastname}
                  placeholder='Lastname'
                  onChange={this.onChange} />
              </Form.Group>
              <Button type='submit'>Create</Button>
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
    alert(JSON.stringify(this.state));
  }
}

export default Signup;
