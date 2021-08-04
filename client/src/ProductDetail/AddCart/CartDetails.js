import React from 'react';
import ReactDOM from 'react-dom';

let CartDetails = (props) => {
  let itemDetails = props.itemDetails;
  console.log(itemDetails);
  return (
    <div className="cartDetails">
      { Object.keys(itemDetails.skus).map( item => {
        return (
          <span className="sizeBtn">{ itemDetails.skus[item].size }</span>
        );
      })
      }
    </div>
  );
};

export default CartDetails;