
const randomizeAffirmation = (ct) => {
  //find out count of items in database
  //take that number and from 1- x randomize
  //return the number generated.
  const randomId = Math.floor(Math.random() * (ct - 1) + 1);
  return randomId;
};

exports.randomizeAffirmation = randomizeAffirmation;