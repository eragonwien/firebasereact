import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Message, Segment, Form, Button, Icon } from 'semantic-ui-react';

class CreateHero extends Component {
  constructor(props) {
    super(props);
    this.state= {
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
  

  componentDidMount() {

  }
  

  render() {
    let {success} = this.state;

    if (success) {
      return <Redirect to='/' />;
    }

    let message = this.getMessage();
    
    
    return (
      <main>
        <Container>
          {message}
          <Segment inverted>
            <Form onSubmit={this.onSubmit} inverted>
              <Form.Group widths='equal'>
                <Form.Input
                  name='id'
                  type='text'
                  value={this.state.id}
                  label='Hero ID'
                  onChange={this.onChange} />
                <Form.Input
                  name='secret'
                  type='text'
                  value={this.state.secret}
                  label='Hero secret identity'
                  onChange={this.onChange} />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  name='firstname'
                  type='text'
                  value={this.state.firstname}
                  label='Hero firstname'
                  onChange={this.onChange} />
                <Form.Input
                  name='lastname'
                  type='text'
                  value={this.state.lastname}
                  label='Hero lastname'
                  onChange={this.onChange} />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  name='species'
                  type='text'
                  value={this.state.species}
                  label='Hero species'
                  onChange={this.onChange} />
                <Form.Input
                  name='citizenship'
                  type='text'
                  value={this.state.citizenship}
                  label='Hero citizenship'
                  onChange={this.onChange} />
              </Form.Group>
              <Button type='submit' inverted>
                <Icon name='plus' />
                Add
              </Button>
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
    alert(JSON.stringify(this.state));
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

export default CreateHero;
