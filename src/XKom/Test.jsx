import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state= {
      redirect: false
    };
  }
  

  componentDidMount() {

  }
  

  render() {

    return (
      <Container>
        <Segment inverted>
          <ul className="nav">
            <li><NavLink exact to="/Home" activeClassname="active">Home</NavLink></li>
          </ul>
        </Segment>
      </Container>
        
    );
  }
}

export default Test;
