import React from 'react';
import ReactDOM from 'react-dom';
import DropDownNums from './DropDownNums';
import { AiOutlineShoppingCart } from 'react-icons/Ai';
import { GiNinjaStar } from 'react-icons/Gi';

let CartDetails = (props) => {
  let itemDetails = props.itemDetails;

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
          <span key={item.skus} className="sizeBtn" style={{ color: '#ddd' }}>
            {item.size}
          </span>
        )
        );
      })}
      <div className="dropdown">
        <button className="dropbtn">QTY</button>
        <div className="dropdown-content">
          <DropDownNums qty={props.amountForDropDown} />
        </div>
      </div>
      <AiOutlineShoppingCart className="cartIcon"/>
      <GiNinjaStar className="star" />
    </div>
  );
};

export default CartDetails;
