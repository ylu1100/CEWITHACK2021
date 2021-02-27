import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Notepad from '../Components/Notepad.js';
import NavBar from '../Components/NavBar.js';
import Past20Meetings from '../Components/PastMeeting.js';
import DrApps from '../Components/DrAppointments.js';
import SetAvailableTimes from '../Components/SetAvailableTimes.js';
const HomePage = () => {
    return(      <Container fluid>
        <Row>
          <NavBar />
        </Row>
      <Row>

          <Col lg={3}>
            <Past20Meetings className = "pastMeetings"/>
          </Col>

          <Col lg={6}>
          <DrApps/>
        </Col>

          <Col lg={3}>
            <Notepad className = "notepad"/>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <SetAvailableTimes/>
          </Col>
        </Row>
      </Container>);
}

export default HomePage;