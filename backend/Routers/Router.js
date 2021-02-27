import {getDoctors,registerDoctor,addAppointment,addAvailability,loginDoctor,getAppointments} from '../controllers/doctorController';
import {formRetrieval} from '../controllers/Form'


export const Routes = (app) =>{
  app.route('/').get((req,res) =>{
    return res.json({message: 'Hello'});
  })

  app.route('/add_doctor').post(registerDoctor);

  app.route('/getdoctors').get(getDoctors);
  
  app.route('/add_appointment/:id').put(addAppointment);

  app.route('/add_availability/:id').put(addAvailability);
  app.route('/login').post(loginDoctor);
  app.route('/test').get(formRetrieval);
  app.route('/get_appointments/:id').get(getAppointments);
}