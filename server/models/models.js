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
      endpoint = startpoint + (ct-1);
    }

    const getProducts = `SELECT id, name, slogan, description, category, default_price FROM productinfo WHERE productinfo.product_id BETWEEN ${startpoint} AND ${endpoint}`;

    return db.pool.query(getProducts).catch((err) => {
      console.log("err");
    });
  },

  getRelated: function (productid) {
    const fetchRelatedIds = `SELECT array_agg(related_products.related_product_id) as related FROM related_products WHERE related_products.product_id=${productid}`;
//test
    return db.pool.query(fetchRelatedIds).catch((err) => {
      console.log("err");
    });
  },

  getAllStyles: function (product) {
    //getting all pictures for said style
    //getting all skus for each style
    const fetchStylePhotos = `
  SELECT
    styles.style_id,
    styles.name,
    styles.sale_price,
    styles.original_price,
    styles.isdefault,
    json_agg(json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url) ) photos
  FROM
    styles
  INNER JOIN
    photos
  ON
    styles.style_id=photos.style_id
  WHERE
    styles.product_id=${product}
  GROUP BY
    styles.style_id, styles.name, styles.sale_price, styles.original_price, styles.isdefault`;

    return db.pool.query(fetchStylePhotos);
  },

  getAllSkus: async function (product) {

    const fetchSkus = `SELECT skus.style_id, json_build_object('id', skus.id, 'size', skus.size, 'quantity', skus.quantity) sku FROM skus WHERE style_id IN (SELECT style_id FROM styles WHERE product_id=${product})`

    const skusMatch = await db.pool.query(fetchSkus);
    return skusMatch;
  }
};
