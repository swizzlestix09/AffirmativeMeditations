import React from 'react';
import ReactDOM from 'react-dom';

let CartDetails = (props) => {
  let itemDetails = props.itemDetails;


  return (
    <div className="cartDetails">
      { Object.keys(itemDetails.skus).map( item => {
        if (itemDetails.skus[item].quantity < 1) {
          return (
            <span key={item.skus} className="sizeBtn" style={{ 'color': '#ddd' }} >{ itemDetails.skus[item].size }</span>);
        }
        return (
          <span key={item.skus} className="sizeBtn" onClick={()=> { addQuantitiestoDropDown(item); } }>{ itemDetails.skus[item].size }</span>
        );
      })
      }
      <div class="dropdown">
        <button class="dropbtn">QTY</button>
        <div class="dropdown-content">
          {qtyArr.length > 0 ? qtyArr : <a> - </a>}
        </div>
      </div>
    </div>
  );
};

export default CartDetails;