import React from 'react';

var BarChart = function (props) {
  var percent, percentString;
  var total = 0;
  var ratings = {};
  var ratingsPercentObj = {};

  if (props.meta.ratings !== undefined ) {
    // total = parseInt(props.meta.recommended.true) + parseInt(props.meta.recommended.false);
    for (var key in props.meta.ratings) {
      total += parseInt(props.meta.ratings[key]);
    }
    ratings = props.meta.ratings;
    for (var i = 1; i < 6; i++) {
      if (props.meta.ratings[i] === undefined) {
        ratings[i] = 0;
      } else {
        ratings[i] = props.meta.ratings[i];
      }
    }
    for (var key in ratings) {
      ratingsPercentObj[key] = parseFloat((parseInt(ratings[key]) / total) * 100).toFixed(0) + '%';
    }
    var ratingArray = Object.entries(ratings);
  }


  console.log(ratingsPercentObj);
  console.log(ratingsPercentObj['3'], typeof ratingsPercentObj['3']);


  return (
    <div className='starRow'>
      <div className='side' >
        <div class = 'test'>5 star</div>
      </div>
      <div className='middle'>
        <div className="bar-container">
          <div style={{width: ratingsPercentObj['5']}} class="bar-5"></div>
        </div>
      </div>
      <div className="right">
        <div>{ratings['5'] }</div>
      </div>
      <div className="side">
        <div>4 star</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div style={{width: ratingsPercentObj['4']}} className="bar-4"></div>
        </div>
      </div>
      <div className="right">
        <div>{ratings['4'] }</div>
      </div>
      <div className="side">
        <div>3 star</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div style={{width: ratingsPercentObj['3'] }} className="bar-3"></div>
        </div>
      </div>
      <div className="right">
        <div>{ratings['3'] }</div>
      </div>
      <div className="side">
        <div>2 star</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div style={{width: ratingsPercentObj['2']}} className="bar-2"></div>
        </div>
      </div>
      <div className="right">
        <div>{ ratings['2'] }</div>
      </div>
      <div className="side">
        <div>1 star</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div style={{width: ratingsPercentObj['1']}} className="bar-1"></div>
        </div>
      </div>
      <div className="right">
        <div>{ratings['1'] }</div>
      </div>
    </div>
  );
};

export default BarChart;