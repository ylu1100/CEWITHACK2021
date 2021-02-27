import React, {useState}from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setMessage] = useState('');

    const notifFade = () => {
        setTimeout(() => {
            setError(false);
        }, 3000);
    }

    const loginDoctor = async () => {
        if (!email || !password) {
            setError(true);
            setMessage("Please complete all fields");
            notifFade();
            return;
        }
        const data = axios.post("http://localhost:4000/login", { email, password }).then((data) => {
            const cookies = new Cookies();
            cookies.set('doctorId', data.data.id);
            props.history.push('/home');
        }).catch((data) => {
            setMessage(data.response.data.message);
            setError(true);
            notifFade();
        });
        
    }
    return (
        <Form>
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
            <Button as="div" onClick={loginDoctor} className="loginButton" type="submit" >Login</Button>
            <Alert variant="danger" onClose={() => setError(false)} show={error} dismissible>
                        {errorMessage}
            </Alert>
    </Form>  
    );
}

export default withRouter(Login);