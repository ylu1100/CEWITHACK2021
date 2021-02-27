import React, {useState}from 'react';
import { Button, Form, Row, Col, Container, Tab, Nav } from 'react-bootstrap';
import Login from '../Components/Login';
import Signup from '../Components/SignUp';
import axios from 'axios';

const LoginSignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="justify-content-center loginSignup" >
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Login </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Sign Up</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={4}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Login />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Signup />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
}

export default LoginSignUp;