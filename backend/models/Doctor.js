import mongoose from 'mongoose';
import {appointmentSchema} from './Appointment';

export const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  availability:{
    type:[[Number]],
    required: false
  },
  notes:{
    type: String,
  },
  appointments:{
    type:[appointmentSchema],
    required: false
  },
  email:{
    type:String,
    required: true,
    unique: 1,
  },
  password:{
    type:String,
    required:true
  }

})