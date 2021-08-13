const { Pool } = require('pg');

const pool = new Pool({
  user: 'swizzlestix',
  host: 'localhost',
  database: 'productdetails',
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


// const getProduct = ( productID ) => {
//   // `SELECT * FROM productinfo, features WHERE productinfo.product_id=${productID}`
//   const getProductInfo = `SELECT
//     *
//   FROM
//     productinfo
//   LEFT JOIN
//     features
//   ON
//     productinfo.product_id = features.product_id
//   WHERE
//     productinfo.product_id=${productID}`;

//   Connect.query(getProductInfo)
//     .then(res => {
//       return res.rows;
//     })
//     .catch(err =>
//       console.log(err)
//     );


// };


// console.log('??????? ', getProduct( 17 ));


// `SELECT
// productinfo.name,
// slogan,
// description,
// category,
// default_price,
// feature,
// value
// FROM
// productinfo
// INNER JOIN
// features
// ON
// productinfo.product_id = features.product_id
// WHERE
// productinfo.product_id=${productID}`;

// SELECT
// productinfo.name,
// productinfo.product_id,
// array_agg(features.feature) as feature,
// array_agg(features.value) as value
// FROM
// features
// LEFT JOIN
// productinfo USING ( product_id )
// GROUP BY productinfo.name, productinfo.product_id`;

// `
//   SELECT
//     array_agg(features.feature) as feature,
//     array_agg(features.value) as value
//   FROM
//     features
//   WHERE
//     features.product_id=${productID}`;