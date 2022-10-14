import Joi from 'joi';

const createStoreSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required()
});

export default createStoreSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
