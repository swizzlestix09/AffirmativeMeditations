import React from 'react';
import ReactDOM from 'react-dom';

let CartDetails = (props) => {
  let itemDetails = props.itemDetails;
  console.log('cd', itemDetails);
  return (
    <div className="cartDetails">
      {Object.values(itemDetails).map((item) => {
        return ( item.quantity > 0 ? (
          <span
            key={item.skus}
            className="sizeBtn"
            onClick={() => {
              addQuantitiestoDropDown(item);
            }}
          >
            {item.size}
          </span>
        ) : (
          <span key={item} className="sizeBtn" style={{ color: '#ddd' }}>
            {item.size}
          </span>
        )
        );
        console.log(item.size);
      })}
      <div class="dropdown">
        <button class="dropbtn">QTY</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
