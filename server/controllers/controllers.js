const db = require('../database/db');

module.exports = {
  getProduct: function(productID) {
    // `SELECT * FROM productinfo, features WHERE productinfo.product_id=${productID}`
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

    return db.connect.query(getProductInfo)
      .then(res => {
        return res.rows;
      })
      .catch(err =>
        console.log(err)
      );

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