const db = require('./database/db');
const models = require('./models/models');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

let port = process.env.PORT || 3000;

app.get('/products/:productid', (req, res) => {
  var item = {};

  const product = req.params.productid;

  models
    .getProduct(product)
    .then((results) => {
      item['product_id'] = results[0].product_id;
      item.name = results[0].name;
      item.slogan = results[0].slogan;
      item.description = results[0].description;
      item.category = results[0].category;
      item['default_price'] = results[0]['default_price'];
      item.features = [];
      for (var i = 0; i < results.length; i++) {
        let label = results[i];
        var itemFeature = {
          feature: label.feature,
          value: label.value,
        };
        item.features.push(itemFeature);
      }
      res.Status = 201;
      res.send(item);
    })
    .catch((err) => {
      res.sendStatus(400);
    });
});

app.get('/products', (req, res) => {
  const pg = req.query.page || 1;
  const ct = req.query.count || 5;

  models
    .getProductList(parseInt(pg), parseInt(ct))
    .then((result) => {
      const productsObj = result.rows;
      res.Status = 201;
      res.send(productsObj);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(400);
    });
});

app.get('/products/:productID/related', (req, res) => {
  const product = req.params.productID;

  models
    .getRelated(product)
    .then((result) => {
      let relatedArr = result.rows[0].related;
      res.Status = 201;
      res.send(relatedArr);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.get('/products/:product_id/styles', (req, res) => {
  const product = req.params.product_id;
  const allStyles = {
    productID: product,
    results: [],
  };
  const skusForStyle = {};

  models.getAllStyles(product)
    .then( (styles) => {
      styles.rows.forEach( sty => {
        allStyles.results.push(sty);
      });
    })
    .then(()=>{
      models.getAllSkus(product)
        .then( allskus => {
          allStyles.results.forEach( sty => {
            sty.sku = {};
            allskus.rows.forEach(eaSku => {
              if (sty.style_id === eaSku.style_id) {
                sty.sku[ eaSku.sku.id ] = { quantity: eaSku.sku.quantity, size: eaSku.sku.size };
              }
            });
          });
          res.send(allStyles);
        })
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });


    })
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });


});

app.listen(port, () => console.log(`We're listening on port ${port}`));


// styleInfo['style_id'] = item['style_id'];
//         styleInfo.name = item.name;
//         styleInfo['original_price'] = item['original_price'];
//         styleInfo['sale_price'] = item['sale_price'];
//         styleInfo['default?'] = item.isdefault;
//         styleInfo.photos = item.photos;
//         console.log('whyyy ', styleInfo)
//           allStyles.results.push(styleInfo);
//         var skuObj = {};