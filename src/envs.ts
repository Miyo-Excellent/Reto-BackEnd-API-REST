import 'dotenv/config';
import * as joi from 'joi';
import * as process from 'node:process';

export interface EnvVars {
  PORT: number;
  MONGODB_CONNECTION: string;
  MONGODB_DB_NAME: string;
}

export const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    MONGODB_CONNECTION: joi.string().required(),
    MONGODB_DB_NAME: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);
if (error) throw new Error(`Config validation failed: ${error.message}`);

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  mongoDbConnection: envVars.MONGODB_CONNECTION,
  mongoDbName: envVars.MONGODB_DB_NAME,
};
