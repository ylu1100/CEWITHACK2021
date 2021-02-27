import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { withRouter } from 'react-router-dom';

const cookies = new Cookies();

const Done = (props) => {

    const [availableDoctors, setAvaliableDoctors] = useState([{}]);
    const [email, setEmail] = useState("");
    const [doctorId, setdoctorID] = useState();
    const [show, setShow] = useState(false);
    const [time, setTime] = useState([]);

    useEffect(() => {
        console.log('hello');
        axios.get("http://localhost:4000/getdoctors").then((data) => {
            console.log(data.data);
            setAvaliableDoctors(data.data);
        });
    },[])

    const sendPatientInfo = async () => {
        axios.put(`http://localhost:4000/add_appointment/${doctorId}`, { email, time }).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err.response);
        });
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 1500);
        props.history.push('/');
    }

    const setAppo = (doctorid, time) => {
        setdoctorID(doctorid);
        setTime(time);
    }

    if(!availableDoctors){
        return (
            <div style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)'
          }}>
              <h1>Waiting ....</h1>
            </div>
          )
    }
    return (
        <div>
            <Container>
        <Form className="scheduleAppoint">
          <Form.Group controlId="formBasicEmail" className="emailConfirm">
            <Form.Label>Email address Confirmation </Form.Label>
                    <Form.Control type="email" required onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
                </Form.Group>
                <Form.Group>
                {
                            availableDoctors.map((doctor, i) => (
                                <div>
                                    <Form.Check
                                        name="choice"
                                        type='radio'
                                        label={doctor.name}
                                        id={i}
                                        onClick={() =>setdoctorID(doctor._id)}
                                        />
                                     
                                </div>
                                       
                        
                            ))
                        
                }
                </Form.Group>
                <Button as="div" onClick={sendPatientInfo} className="loginButton" type="submit" > Schedule </Button>
        </Form>
                <Alert variant="success" show={show}>Successfully Scheduled</Alert>
                </Container>
      </div>
    );
}

export default withRouter(Done);