const db = require('../database/db');

console.log(db);
module.exports = {

  getProduct: function (productID, cb) {
    console.log('wtf')

  }
};


module.getProduct( 11103, (result)=> {
  console.log('??????', result)
}



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