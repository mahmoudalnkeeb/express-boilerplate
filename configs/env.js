require('dotenv').config();

let env =
  process.env.ENV == 'dev'
    ? { port: 4000, dbConnectionString: '' }
    : { port: process.env.PORT, dbConnectionString: '' };

module.exports = env;
