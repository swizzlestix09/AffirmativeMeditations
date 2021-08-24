const db = require('./Database/data')



module.exports = {
  getCount : function () {
    const countOfQuotes = 'SELECT count(*) FROM affirmations'
    return db.pool.query(countOfQuotes)
    .then(ct => {
      console.log('count ', ct.rows[0].count)
      return ct.rows[0].count;
    })
    .catch(err => {
      console.log(err);
    })
  },

  getSaved: function(userID) {

  },

};

