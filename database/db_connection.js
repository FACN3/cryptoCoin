const { Pool } = require('pg');
require('env2')('config.env');

if (!process.env.DATABASE_URL)
  throw new Error('enviroment var for database must be set');

module.exports = new Pool({ connectionString: process.env.DATABASE_URL });
