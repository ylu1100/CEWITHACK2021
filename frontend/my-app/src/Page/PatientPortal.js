import React, {useState} from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { withRouter } from 'react-router-dom';

const PatientPortal = (props) => {
    const patientInfoDone = () => {
        props.history.push('/done');
    }

    return (
        <div>
            <ReactTypeformEmbed onSubmit={patientInfoDone} url="https://b9ssylqt17l.typeform.com/to/bPZ35Huh" />
        {/* <Container>
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"/>
        <Form.Label>Date:</Form.Label>
        <Form.Control type="date" placeholder="name@example.com"/>
        <Form.Label>Time:</Form.Label>
        <Form.Control type="time" placeholder="name@example.com"/>
        <Form.Label>Reason For Visiting:</Form.Label>
        <Form.Control as="textarea" rows={3} />

        <Form.Label>Street Address:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"/>
        <Form.Label>City:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"/>
        <Form.Label>State:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"/>
        <Form.Label>Insurance Company:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"/>
        <Form.Label>Member ID:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"/>
        </Form.Group>
        <Button variant="primary" type="submit">
        Make Appointment
        </Button>
        </Form>
            </Container> */}
        </div>
    )
}
export default withRouter(PatientPortal);