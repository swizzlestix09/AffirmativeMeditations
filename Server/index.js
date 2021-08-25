const express = require('express');
const path = require('path');
const models = require('./models')
const port = process.env.PORT || 3001;
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '/../', 'public')));


app.get('/count', (req, res) => {
  models.getCount()
  .then( count => {
    res.Status = 201;
    res.json(count);
  })
  .catch(err => {
    res.sendStatus(400);
  })
});

app.get('/quote', (req, res) => {
  models.getRandomMessage(req.query.id)
  .then( info => {
    res.Status = 201;
    res.json(info)
  })
  .catch(err => {
    res.sendStatus(401);
  })
});



app.listen(port, () => {
  console.log(`We're live on ${port}`)
});