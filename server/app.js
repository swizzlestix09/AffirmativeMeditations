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

  models.getProduct(product)
    .then(results => {
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
          value: label.value
        };
        item.features.push(itemFeature);
      }
      res.Status = 201;
      res.send(item);
      console.log('really? ', item);
    })
    .catch( (err) => {
      res.sendStatus(400);
    });

});

app.listen(port, () =>
  console.log(`We're listening on port ${port}`)
);