import React, { useState, useEffect} from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

const Notepad = (props) => {
    const [note, setNote] = useState("");
    const [email, setEmail] = useState("");

    const saveNote = async () => {
        const data = await axios.post("https://backend/saveNote", { note, email });
    }

    useEffect(async () => {
        setEmail(props.email);
        const backendNote = await axios.get("https://backend/getNote", { email });
        setNote(backendNote);
    })

    // const logout=(e)=>{
    //     e.preventDefault();
    // }

    return (
        <div className="notepad">
            <InputGroup className="noteSection">
                <InputGroup.Prepend>
                    <InputGroup.Text>Note</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" rows="20" placeholder={note} aria-label="With textarea" />
            </InputGroup>
                <Button className="saveNote" onChange={(e) => setNote(e.target.value)} onClick={saveNote}>Save</Button>
            </div>
    );
}

export default Notepad;