const { Pool } = require("pg");

const pool = new Pool({
  user: "swizzlestix",
  host: "localhost",
  database: "productdetails",
  password: "D8BA5eR3ALNE55",
  port: 5432,
});

(async function () {
  const client = await pool.connect();
  await client.query("SELECT NOW()");
  client.release();
})();

module.exports = {};
