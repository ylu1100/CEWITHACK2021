import React, {useState} from 'react';
import {Container,Button,Modal} from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const SetAvailableTimes=()=>{

    const [show2, setShow2] = useState(false);
    const [availableTimes,setAvailableTimes]=useState([]);
    
    const [doctorId,setdoctorID]=useState();
    const handleShow2 = () =>{
        setShow2(true);}
    const handleClose2 = () => {
        console.log(availableTimes)
        sendAvailableTimes()
       // window.location.reload(false);
        setShow2(false);
      
    }
    function addAvailableTime(start,end){
        if(!availableTimes.includes([start,end])){
            var timeStr=document.getElementById("timeStr").innerHTML.concat(start+"-"+end+",")
            document.getElementById("timeStr").innerHTML=timeStr
            
            availableTimes.push([start,end])
        }
        
    }

    const sendAvailableTimes=async()=>{
        axios.put(`http://localhost:4000/add_availability/${cookies.get('doctorId')}`, {
        availableTimes: availableTimes
        }
        ).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err.response);
        });
       
            setShow2(true);
            setTimeout(() => {
                setShow2(false);
            }, 3000);
    }
    return(
        <div>
           <Button onClick={handleShow2} variant="secondary" size="sm">
                        Set Availability
                    </Button>

            <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Barbara</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <br></br>
        <label for="scheduleTime"><p>Time: </p></label>
        <br></br>
        <p id="timeStr">Times: </p>
        <Button onClick={()=>addAvailableTime(0,1)} style={{marginBottom:"10px"}} variant="secondary" size="sm">00:00-01:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(1,2)}  style={{marginBottom:"10px"}} variant="secondary" size="sm">01:00-02:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(2,3)}  style={{marginBottom:"10px"}} variant="secondary" size="sm">02:00-03:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(3,4)}  style={{marginBottom:"10px"}} variant="secondary" size="sm">03:00-04:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(4,5)}  style={{marginBottom:"10px"}} variant="secondary" size="sm">04:00-05:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(5,6)}  style={{marginBottom:"10px"}} variant="secondary" size="sm">05:00-06:00</Button>
        <br></br>
        <Button  onClick={()=>addAvailableTime(6,7)} style={{marginBottom:"10px"}} variant="secondary" size="sm">06:00-07:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(7,8)} style={{marginBottom:"10px"}} variant="secondary" size="sm">07:00-08:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(8,9)} style={{marginBottom:"10px"}} variant="secondary" size="sm">08:00-09:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(9,10)} style={{marginBottom:"10px"}} variant="secondary" size="sm">09:00-10:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(10,11)} style={{marginBottom:"10px"}} variant="secondary" size="sm">10:00-11:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(11,12)} style={{marginBottom:"10px"}} variant="secondary" size="sm">11:00-12:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(12,13)} style={{marginBottom:"10px"}} variant="secondary" size="sm">12:00-13:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(13,14)} style={{marginBottom:"10px"}} variant="secondary" size="sm">13:00-14:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(14,15)} style={{marginBottom:"10px"}} variant="secondary" size="sm">14:00-15:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(15,16)} style={{marginBottom:"10px"}} variant="secondary" size="sm">15:00-16:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(16,17)} style={{marginBottom:"10px"}} variant="secondary" size="sm">16:00-17:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(17,18)}  style={{marginBottom:"10px"}} variant="secondary" size="sm">17:00-18:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(18,19)} style={{marginBottom:"10px"}} variant="secondary" size="sm">18:00-19:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(19,20)} style={{marginBottom:"10px"}} variant="secondary" size="sm">19:00-20:00</Button>
        <br></br>
        <Button  onClick={()=>addAvailableTime(20,21)} style={{marginBottom:"10px"}} variant="secondary" size="sm">20:00-21:00</Button>
        <br></br>
        <Button  onClick={()=>addAvailableTime(21,22)} style={{marginBottom:"10px"}} variant="secondary" size="sm">21:00-22:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(22,23)}  style={{marginBottom:"10px"}} variant="secondary" size="sm">22:00-23:00</Button>
        <br></br>
        <Button onClick={()=>addAvailableTime(23,24)} style={{marginBottom:"10px"}} variant="secondary" size="sm">23:00-24:00</Button>
        <br></br>
        </Modal.Body>
        
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>
            Submit
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>
    )
}
export default SetAvailableTimes;