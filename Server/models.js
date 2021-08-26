const db = require('./Database/data')



module.exports = {
  getCount : function () {
    const countOfQuotes = 'SELECT count(*) FROM affirmations'
    return db.pool.query(countOfQuotes)
    .then(ct => {
      return ct.rows[0].count;
    })
    .catch(err => {
      console.log(err);
      return err;
    })
  },
  getRandomMessage: function (ID) {
    const getRandomMsg = `SELECT quote FROM affirmations WHERE id=${ID}`
    return db.pool.query(getRandomMsg)
      .then(msg => {
        return msg.rows[0].quote;
      })
      .catch(err => {
        console.log(err);
        return err;
      })
  },
  getSaved: function(userID) {

  },

};

