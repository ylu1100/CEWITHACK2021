import React, {useState} from 'react';
import {Button, Form, Alert}  from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';    
    const Signup = (props) => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [name, setName] = useState("");
        const [error, setError] = useState(false);
        const [errorMessage, setMessage] = useState('');
        
    
        const notifFade = () => {
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
        const registerDoctor = () => {
            if (password.length < 6) {
                setError(true);
                setMessage("Password should be at least 6 characters");
                notifFade();
                return;
            }
            axios.post("http://localhost:4000/add_doctor", { name, email, password }).then((data) => {
                const cookies = new Cookies();
                cookies.set('doctorId', data.data.id);
                props.history.push('/home');
            }).catch((err) => {
                setMessage(err.response.data.message);
                setError(true);
                notifFade();
            });
        }
        return (
            <Form>
            <Form.Group controlId="name" className="loginForm">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="email" className="loginForm">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="password" className="loginForm">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password}   onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
            </Form.Group>
                <Button as="div" onClick={registerDoctor} className="loginButton" type="submit" >Sign Up</Button>
                <Alert variant="danger" onClose={() => setError(false)} show={error} dismissible>
                            {errorMessage}
                </Alert>
        </Form>  
        );
    }
        
    
    export default withRouter(Signup);
