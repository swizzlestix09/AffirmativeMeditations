import React from 'react';
import ReactDOM from 'react-dom';
import DropDownNums from './DropDownNums';
import { AiOutlineShoppingCart } from 'react-icons/Ai';
import { GiNinjaStar } from 'react-icons/Gi';

let CartDetails = (props) => {
  let itemDetails = props.itemDetails;
  console.log('cd', props);
  return (
    <div className="cartDetails">
      {Object.values(itemDetails).map((item) => {
        return ( item.quantity > 0 ? (
          <span
            key={item.skus}
            className="sizeBtn"
            onClick={() => {
              props.qty(item.quantity);
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
      })}
      <div class="dropdown">
        <button class="dropbtn">QTY</button>
        <div class="dropdown-content">
          <DropDownNums qty={props.amountForDropDown} />
        </div>
      </div>
      <AiOutlineShoppingCart className="cartIcon"/>
      <GiNinjaStar className="star" />
    </div>
  );
};

export default CartDetails;
