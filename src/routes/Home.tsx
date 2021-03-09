import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  return (
    <Container>
      <Row>
        <Col>
          <h1>React Interview Project</h1>
          <p>
            Welcome to the TerraQuest React interview project! Please use this project to develop the test requirements
            within.
          </p>

          <hr />

          <Link to="/companies" className="btn btn-primary">View Companies</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
