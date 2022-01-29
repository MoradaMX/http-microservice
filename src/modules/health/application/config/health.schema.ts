import * as Joi from 'joi';

export const healthSchema = Joi.object({
  ACCOUNTS_HOST: Joi.string().hostname().default('localhost').required(),
  ACCOUNTS_PORT: Joi.number().required(),
  OUTBOUND_HOST: Joi.string().hostname().default('localhost').required(),
  OUTBOUND_PORT: Joi.number().required(),
  FAVORITES_HOST: Joi.string().hostname().default('localhost').required(),
  FAVORITES_PORT: Joi.number().required(),
});
