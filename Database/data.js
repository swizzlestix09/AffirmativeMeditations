const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/affirmations', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
  console.log(`We're goosin!`);
})

const affirmationsSchema = new mongoose.Schema({
  Id: Number,
  quotes: String
});

const affirmations = mongoose.model('Affirmation', affirmationsSchema);