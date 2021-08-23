const express = require('express');
const app = express();
const db = require('../Database/data')
const port = process.env.PORT || 3001;



app.listen(port, () => {
  console.log(`We're live on ${port}`)
})