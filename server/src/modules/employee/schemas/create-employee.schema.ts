import Joi from 'joi';

const createEmployeeSchema = Joi.object({
  name: Joi.string().required(),
  gender: Joi.string().required(),
  age: Joi.number().required(),
  phone: Joi.string().required()
});

export default createEmployeeSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
