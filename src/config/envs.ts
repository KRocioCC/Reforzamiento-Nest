import 'dotenv/config';
import * as joi from 'joi';

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
  })
  .unknown(true);

const result = envsSchema.validate(process.env);
const envVars = result.value as { PORT: number };
const error = result.error;

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

console.log('envVars', envVars);
console.log('error', error);

export const envs = {
  port: envVars.PORT,
};
