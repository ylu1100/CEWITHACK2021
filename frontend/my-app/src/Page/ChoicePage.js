import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChoicePage = () => {
    return (
        <div className="choice">
            <div className="choiceText">Please choose one: </div>
            <Link to='/patient'><Button className="patientChoice" size="lg">I am a Patient</Button></Link>
            <span className="centerBox"></span>
            <Link to='/login'><Button  className="doctorChoice" size="lg">I am a Doctor</Button></Link>
        </div>
    );
}

export default ChoicePage;