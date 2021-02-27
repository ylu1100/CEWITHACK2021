import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar} from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { withRouter } from 'react-router-dom';

const NavBar = (props) => {
  const[state, setState]=useState({
    drName:""
  })


  const signOut = () => {
    const cookies = new Cookies();
    cookies.remove('doctorId');
    props.history.push('/');
  }

    return (
      <div className ='container-fluid' > 
        <Navbar sticky = 'top' bg="light" expand="lg">
        <Navbar.Brand href="#home">VirtualMD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       
          <Nav className="ml-auto">
            <Nav.Link className = 'navlink' href="#home">Home</Nav.Link>
            <Nav.Link className = 'navlink' onClick={signOut}>Sign out</Nav.Link>
         </Nav>

        </Navbar.Collapse>
        </Navbar>
       </div>
    );
}

export default withRouter(NavBar);