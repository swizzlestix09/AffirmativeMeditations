const db = require("../database/db");

module.exports = {
  getProduct: async function (productID) {
    const getProductInfo = `SELECT
      *
    FROM
      productinfo
    LEFT JOIN
      features
    ON
      productinfo.product_id = features.product_id
    WHERE
      productinfo.product_id=${productID}`;

    const data = await db.pool
      .query(getProductInfo)
      .catch((err) => console.log(err));
    return data.rows;
  },

  getProductList: function (pg, ct) {
    let startpoint = pg, endpoint = ct;
    if (pg > 1 ) {
      startpoint = pg * ct;
      endpoint = startpoint + ct;
    }

    const getProducts = `SELECT id, name, slogan, description, category, default_price FROM productinfo WHERE productinfo.product_id BETWEEN ${startpoint} AND ${endpoint}`

    return db.pool
      .query(getProducts)
      .catch(err => {
        console.log('err')
      })
  },

  getRelated: function (productid) {
    //console.log( 'in related ', productid);
    const fetchRelatedIds = `SELECT array_agg(related_products.related_product_id) as related FROM related_products WHERE related_products.product_id=${productid}`

    return db.pool
      .query(fetchRelatedIds)
      .catch(err => {
        console.log('err')
      })
  }
};


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

// const db = require('../database/db');

// console.log('is this undef ?', db.Connect);

// module.exports = {

//   getProduct: function (productID) {
//     console.log('wtf');
//     const getProductInfo = `
//   SELECT
//     productinfo.name,
//     slogan,
//     description,
//     category,
//     default_price,
//     feature,
//     value
//   FROM
//     productinfo
//   INNER JOIN
//     features
//   ON
//     productinfo.product_id = features.product_id
//   WHERE
//     productinfo.product_id=${productID}`;

//     Connect.query(getProductInfo)
//       .then(res => {
//         console.log('query for prods ', res.rows);
//       })
//       .catch(err =>
//         console.log(err)
//       );

//   }
// };

// module.getProduct(17);

// `SELECT * FROM productinfo, features WHERE productinfo.product_id=${productID}`
