import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Container,ListGroup, Button, Modal} from 'react-bootstrap';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
    
const PatientInfo={
    fontSize:"15px",
    marginBottom:"5px"
}
const checker={
    position:"absolute",
    left:"30px"
}
const appDash={
    overflow:"scroll",
    overflowX:"hidden",
    height:"500px",
    backgroundColor: "gray"
}


const DrAppointments = () => {

    const [appointments, setAppointment] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/get_appointments/${cookies.get('doctorId')}`).then((data) => {
            console.log(data);
            setAppointment(data.data);
        });
    }, [])

    // const [show2, setShow2] = useState(false);
    // const handleClose2 = () => {
    //     setShow2(false);
    //     console.log(state.currentDate);
      
    // }
    // const handleShow2 = () =>{
    //     setShow2(true);}
    
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () =>{
    //     setShow(true);}
    return (
      <div>
        <Container style={{ marginTop: "5%" }}>
          <div style={appDash}>
            {appointments.map((appointment, i) => (
                <ListGroup style={{ marginTop: "10px" }}>
                <ListGroup.Item
                  style={{ margin: "auto", width: "90%", height: "30%" }}
                >
                  <input style={checker} type="checkbox"></input>
                        <h1 style={{ fontSize: "17px" }}>Meeting With {appointment.patient_name}</h1>
                        <p style={PatientInfo}><strong>Time:</strong> {Math.random()*10}</p>
                        <p style={PatientInfo}><strong>Email:</strong> {appointment.email}</p>
                        <p style={PatientInfo}><strong>Reason:</strong> {appointment.about}</p>
                  {/* <Button
                    onClick={handleShow}
                    variant="secondary"
                    size="sm"
                    style={{ marginBottom: "10px" }}
                  >
                    Patient Info
                  </Button> */}
                         {/* <Button
                    variant="secondary"
                    size="sm"
                    style={{ marginBottom: "10px" }}
                  >
                    Patient Info
                  </Button> */}
                  <br></br>
                  {/* <Button onClick={handleShow2} variant="secondary" size="sm">
                            Schedule Another Meeting
                  </Button> */}
                  <Button  variant="secondary" size="sm">
                    Schedule Another Meeting
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            ))}
          </div>
        </Container>

        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Barbara</Modal.Title>
          </Modal.Header>
          <Modal.Body id="time">Time: {state.patientInfo[0]}</Modal.Body>
          <Modal.Body>Email: {state.patientInfo[1]}</Modal.Body>
          <Modal.Body>Reason For Visiting:</Modal.Body>
          <Modal.Body>Street Address:</Modal.Body>
          <Modal.Body>City</Modal.Body>
          <Modal.Body>State</Modal.Body>
          <Modal.Body>Insurance Company:</Modal.Body>
          <Modal.Body>Member ID</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Barbara</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label for="scheduleDate">
              <p>Schedule Date: </p>
            </label>
            <input
              id="scheduleDate"
              type="date"
              min={state.currentDate}
              required
            ></input>
            <br></br>
            <label for="scheduleTime">
              <p>Time: </p>
            </label>
            <input id="scheduleTime" type="time" required></input>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    );
   
}

export default DrAppointments;