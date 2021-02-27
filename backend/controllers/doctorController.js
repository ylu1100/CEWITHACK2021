import {doctorSchema} from '../models/Doctor';
import {appointmentSchema} from '../models/Appointment';
import mongoose from 'mongoose';
import {loginValidation,registerValidation} from '../validation';
import axios from 'axios';

const Doctor = mongoose.model("Doctor",doctorSchema);
const Appointment = mongoose.model("Appointment",appointmentSchema);


export const getDoctors = async (req,res) =>{
  Doctor.find({},(err,doctors) =>{
    if(err){
      return res.status(404).send(err);
    }
    return res.json(doctors);
  })
}

export const registerDoctor = async (req, res) => {
  console.log(req.body);
  const {error} = registerValidation(req.body);
  if(error) return res.status(400).json({error: error.details[0].message});

  const emailExists = await Doctor.findOne({email: req.body.email});

  if(emailExists) return res.status(400).json({message : "Email already exists"});
  Doctor.create({...req.body},(err,doctor) =>{
    if(err){
      return res.status(404).send(doctor);
    }
    return res.json({ id: doctor._id });
  })
}

export const loginDoctor = async (req, res) => {
  const {error} = loginValidation(req.body);
  if(error) return res.status(400).json({error: error.details[0].message});

  Doctor.findOne({'email' : req.body.email},(err,doctor) =>{
    if(!doctor) {
      return res.status(400).json({message : "Email not registered!"});
    }
    if(req.body.password == doctor.password){
      return res.json({id: doctor._id});
    }
    return res.status(400).json({message: "Invalid password"});
  })

}

export const getAppointments = async (req,res) =>{
  Doctor.findById(req.params.id,(err,doctor) =>{
    if(err){
      return res.status(404).send(err);
    }
    console.log('Success');
    return res.send(doctor.appointments);
  })
}


export const addAppointment = async (req, res) => {
  axios.get('https://api.typeform.com/forms/bPZ35Huh/responses',{
    headers:{
      Authorization: 'Bearer 6bey6hDQamxi1QK3NmnzLdxYKzGoac1Xp5WupcQjLeeH',
      typeform_personal_token: '6bey6hDQamxi1QK3NmnzLdxYKzGoac1Xp5WupcQjLeeH'
    }
  }).then((response) =>{
    let info = response.data.items;
    let target;
    for (let x = 0; x < info.length; x++){
      let answer = info[x].answers;
      if (answer == undefined || answer == null) break;
      for(let y = 0; y < answer.length;y++){
        // let answer = curr[y];
        if(answer[2].email == req.body.email){
          target = answer;
          break;
        }
      }
    }
    const appointment = new Appointment({
      patient_name: target[0].text + " "+target[1].text,
      time:req.body.time, // start to end time
      about: req.body.about, //check
      email: target[2].email,//check
      date_of_birth: target[3].date,//check
      insurance: target[4].text,//check
      member_id: target[5].text,//check
      address: target[6].text,
      about: target[7].text
    });

    Doctor.findOneAndUpdate({_id:req.params.id},{$push : {appointments: appointment}},{useFindAndModify:false,new: true},(err, doctor) =>{
      if(err){
         return res.status(404).send(err);
       }
       appointment.save((err,response) =>{
         if(err){
           return res.status(404).send(err);
         }
         return res.json(doctor);
       }) 
  })

    
  },(err) => {
    return res.status(401).send(err);
  })



  // const appointment = new Appointment({
  //   patient_name: req.body.patient_name,
  //   start: req.body.start,
  //   end: req.body.end,
  //   about: req.body.about
  // });
  //   Doctor.findOneAndUpdate({_id:req.params.id},{$push : {appointments: appointment}},{useFindAndModify:false,new: true},(err, doctor) =>{
  //         if(err){
  //            return res.status(404).send(err);
  //          }
  //          appointment.save((err,response) =>{
  //            if(err){
  //              return res.status(404).send(err);
  //            }
  //            return res.json(doctor);
  //          }) 
  //     })  
}
export const addAvailability = async (req,res) =>{
  const times = req.body.availableTimes;
  console.log(times);
  console.log(req.params.id)
  Doctor.findOneAndUpdate({_id:req.params.id},{availability : times},{useFindAndModify: false,new : true},(err, doctor) =>{
    if(err){
      return res.status(404).send(err);
    }
    return res.json(doctor);
  })
}