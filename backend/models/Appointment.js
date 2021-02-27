import mongoose from 'mongoose';

export const appointmentSchema = new mongoose.Schema({
  patient_name:{
    type: String,
    required: true
  },
  date_of_appointment:{
    type: Date,
    required: true
  },
  time:{
    type:[Number],
    required: true
  },
  about:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  date_of_birth:{
    type: Date,
    required: true
  },
  insurance:{
    type: Date,
    required: true
  },
  member_id:{
    type:Date,
    required: true
  },
  address:{
    type: String,
    required: true
  }
})
