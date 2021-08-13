const { Pool } = require('pg');
const pool = new Pool({
  user: 'swizzlestix',
  host: 'localhost',
  database: 'productdetails',
  password: 'D8BA5eR3ALNE55',
  port: 5432,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

pool
  .connect()
  .then( () =>
    console.log('Connected to postgreSQL')
  )
  .catch(err => {
    console.log('error connecting: ', err);
  });

const getProduct = ( productID ) => {
  // `SELECT * FROM productinfo, features WHERE productinfo.product_id=${productID}`
  const getProductInfo = `
  SELECT
    productinfo.name,
    slogan,
    description,
    category,
    default_price,
    feature,
    value
  FROM
    productinfo
  INNER JOIN
    features
  ON
    productinfo.product_id = features.product_id
  WHERE
    productinfo.product_id=${productID}`;

  pool.query(getProductInfo)
    .then(res => {
      console.log('query for prods ', res.rows);
    })
    .catch(err =>
      console.log(err)
    );


};


console.log(getProduct( 17 ));

module.exports = {};

// const getProduct = ( productID ) => {
//   let item;
//   const getProductInfo = `SELECT * FROM productinfo WHERE product_id=${productID}`;
//   const getFeatureInfo = `SELECT * FROM features WHERE features.product_id=${productID}`;

//   pool
//     .connect()
//     .then(client => {
//       return client
//         .query(getProductInfo)
//         .then(result => {
//           item = result.rows;
//         })
//         .catch(error => {
//           return error;
//         });
//     });
// };