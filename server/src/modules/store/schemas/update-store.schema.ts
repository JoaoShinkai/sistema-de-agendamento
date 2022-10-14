import Joi from 'joi';

const updateStoreSchema = Joi.object({
  name: Joi.string(),
  password: Joi.string()
});

export default updateStoreSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
