const { Pool } = require('pg');

const pool = new Pool({
  user: 'swizzlestix',
  host: 'localhost',
  database: 'productdetails',
  password: 'D8BA5eR3ALNE55',
  port: 5432,
});
//HELP
pool
  .connect()
  .then( () => {
    console.log('Connected to postgreSQL');
  })
  .catch(err => {
    console.log('error connecting: ', err);
  });


exports.pool = pool;

