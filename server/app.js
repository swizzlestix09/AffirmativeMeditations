const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./database/queries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

let port = process.env.PORT || 3000;


app.get('/', (req, res) =>
  res.send('hi hi')
);

app.listen(port, () =>
  console.log(`We're listening on port ${port}`)
);