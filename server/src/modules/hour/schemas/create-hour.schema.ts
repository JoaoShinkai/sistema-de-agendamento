import Joi from 'joi';

const createHourSchema = Joi.object({
  startTime: Joi.string()
    .regex(/^([01]\d|2[0-3]):?([0-5]\d)$/)
    .required(),
  endTime: Joi.string()
    .regex(/^([01]\d|2[0-3]):?([0-5]\d)$/)
    .required(),
  weekday: Joi.object({ id: Number }).required()
});

export default createHourSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
