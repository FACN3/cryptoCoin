const {Pool} = require('pg');
const url = require('url');
require('env2')('config.env');

if (!process.env.DATABASE_URL)
  throw new Error("enviroment var for database must be set");

const params = url.parse(process.env.DATABASE_URL);
const [username, password] = params.auth.split(':');

module.exports = new Pool({connectionString: process.env.DATABASE_URL});
