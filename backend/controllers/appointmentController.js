import {appointmentSchema} from '../models/Appointment';
import mongoose from 'mongoose';

const Appointment = mongoose.model("Appointment",appointmentSchema);

export const createAppointment = async (req,res) =>{
  // the body should have start: Time, end:Time
  Appointment.create({...req.body},(err,appointment) =>{
    if(err){
      return err;
    }
    console.log(appointment);
    return res.json(appointment);
  })
}