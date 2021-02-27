import React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';


const PastMeeting = () => {
  
  const [pastMeetings, setPastMeetings] = useState([{firstName: "A", lastName: "B", date: "12/01/2001"}]);

  useEffect(async () => {
    const pastMeetings = await axios.get("https://backend/pastMeetings");
    setPastMeetings(pastMeetings);
  }, [pastMeetings])
  
    return ( 
       <div className="table">
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Date</th>
    </tr>
  </thead>
    <tbody>   
            {pastMeetings.map((meeting, i) => (
              <tr key={i}>
                <th>{i+1}</th>
                <th>{meeting.firstName}
              </th><th>{meeting.lastName}
              </th><th>{meeting.date}
              </th></tr>))}        
  </tbody>
</Table> 
</div>
     );
}
 
export default PastMeeting;