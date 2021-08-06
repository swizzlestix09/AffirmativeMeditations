import React from 'react';

function StarRating({width}) {
  return (
    <div className="star-ratings-css">
      <div className="star-ratings-css-top" style={{width: width}}><span>★★★★★</span></div>
      <div className="star-ratings-css-bottom"><span className ="stars">★★★★★</span></div>
    </div>
  );
}

export default StarRating;