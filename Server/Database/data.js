const { Pool } = require('pg');

const pool = new Pool({
    user: 'swizzlestix',
    host: 'localhost',
    database: 'affirmations',
    password: 'D8BA5eR3ALNE55',
    port: 5432,
  });

  pool
    .connect()
    .then( () => {
      console.log('Connected to postgreSQL');
    })
    .catch(err => {
      console.log('error connecting: ', err);
    });

    exports.pool = pool;