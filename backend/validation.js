import Joi from '@hapi/joi';

export const registerValidation = (data)=>{
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    name: Joi.string().min(3).max(255).required(),

  })
  return schema.validate(data);
}

export const loginValidation = (data) =>{
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
  });
  return schema.validate(data);
}