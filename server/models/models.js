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
    let startpoint = pg,
      endpoint = ct;
    if (pg > 1) {
      startpoint = pg * ct;
      endpoint = startpoint + ct;
    }

    const getProducts = `SELECT id, name, slogan, description, category, default_price FROM productinfo WHERE productinfo.product_id BETWEEN ${startpoint} AND ${endpoint}`;

    return db.pool.query(getProducts).catch((err) => {
      console.log("err");
    });
  },

  getRelated: function (productid) {
    const fetchRelatedIds = `SELECT array_agg(related_products.related_product_id) as related FROM related_products WHERE related_products.product_id=${productid}`;

    return db.pool.query(fetchRelatedIds).catch((err) => {
      console.log("err");
    });
  },

  getAllStyles: function (product) {
    //getting all pictures for said style
    //getting all skus for each style
    console.log("in styles func ", product);
    const fetchStyleSkusPhotos = `SELECT styles.style_id, styles.name, styles.sale_price, styles.original_price, styles.isdefault,
  json_agg(json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url) ) photos, json_agg(json_build_object( skus.id, json_build_object( 'quantity', quantity, 'size', size) ) ) skus FROM styles INNER JOIN photos ON styles.style_id=photos.style_id INNER JOIN skus ON styles.style_id=skus.style_id WHERE styles.product_id=${product} GROUP BY styles.style_id, styles.name, styles.sale_price, styles.original_price, styles.isdefault, photos.thumbnail_url, photos.url`;
    return db.pool.query(fetchStyleSkusPhotos);
  },
};

// `
  //   SELECT
  //   *,
  //   json_agg(json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url) ) photos,
  //   json_agg(json_build_object( skus.id, json_build_object( 'quantity', quantity, 'size', size) ) ) skus
  // FROM
  //   styles
  // INNER JOIN
  //   photos
  // ON
  //   styles.style_id=photos.style_id
  //     FROM
  //   photos
  // INNER JOIN
  //   skus
  // ON
  //   styles.style_id=skus.style_id

  // WHERE
  //   styles.product_id=${product}
  // GROUP BY
  //   styles.id, photos.id, skus.id`

//getting skus the way i want them:
// SELECT style_id, json_agg(json_build_object('quantity', quantity, 'size', size) ) FROM skus WHERE skus.style_id=66 GROUP BY skus.style_id;

//getting pictures the way i want them:
//SELECT style_id, json_agg(json_build_object('thumbnail_url', thumbnail_url, 'url', url) ) FROM photos WHERE photos.style_id IN (SELECT style_id, name,sale_price, original_price, isdefault FROM styles WHERE product_id=${product}) GROUP BY style_id;

//getting styles the way i want them
// // SELECT style_id, name,sale_price, original_price, isdefault FROM styles WHERE product_id=${product}

// SELECT
//   styles.style_id,
//   styles.name,
//   styles.sale_price,
//   styles.original_price,
//   styles.isdefault,
//   json_agg(json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url) ),
//   json_agg(json_build_object('quantity', quantity, 'size', size) )
// FROM
//   styles
// INNER JOIN
//   photos
// ON
//   styles.style_id=photos.style_id
// INNER JOIN
//   skus
// ON
//   styles.style_id=skus.style_id
// WHERE
//   styles.product_id=17
// GROUP BY
//   styles.style_id, styles.name, styles.sale_price, styles.original_price, styles.isdefault;

// `
//     SELECT
//     styles.style_id,
//     styles.name,
//     styles.sale_price,
//     styles.original_price,
//     styles.isdefault,
//     json_agg(json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url) ) photos,
//     json_agg(json_build_object( 'quantity', quantity, 'size', size) ) skus
//   FROM
//     styles
//   INNER JOIN
//     photos
//   ON
//     styles.style_id=photos.style_id
//   INNER JOIN
//     skus
//   ON
//     styles.style_id=skus.style_id
//   WHERE
//     styles.product_id=${product}
//   GROUP BY
//     styles.style_id, styles.name, styles.sale_price, styles.original_price, styles.isdefault, photos.thumbnail_url, photos.url`

// SELECT style_id, json_agg(json_build_object('thumbnail_url', thumbnail_url, 'url', url) ) FROM photos WHERE photos.style_id IN (SELECT style_id, name,sale_price, original_price, isdefault FROM styles WHERE product_id=17) GROUP BY style_id;

// SELECT *, array_agg(thumbnails_url, url) photos FROM styles WHERE product_id=17 INNER JOIN photos using styles_id GROUP BY styles_id
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
// productinfo USING ( product_id=17 )
// GROUP BY productinfo.name, productinfo.product_id`;

// `
// SELECT
//   array_agg(features.feature) as feature,
//   array_agg(features.value) as value
// FROM
//   features
// WHERE
//   features.product_id=17`;

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

// SELECT
//     array_agg(features.feature, features.value) as features
//   FROM
//     features
//   WHERE
//     features.product_id=17

// `
//     SELECT
//     styles.style_id,
//     styles.name,
//     styles.sale_price,
//     styles.original_price,
//     styles.isdefault,
//     json_agg(json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url) ) photos,
//     json_agg(json_build_object( skus.id, json_build_object( 'quantity', quantity, 'size', size) ) ) skus
//   FROM
//     styles
//   INNER JOIN
//     photos
//   ON
//     styles.style_id=photos.style_id
//   INNER JOIN
//     skus
//   ON
//     styles.style_id=skus.style_id
//   WHERE
//     styles.product_id=${product}
//   GROUP BY
//     styles.style_id, styles.name, styles.sale_price, styles.original_price, styles.isdefault`
