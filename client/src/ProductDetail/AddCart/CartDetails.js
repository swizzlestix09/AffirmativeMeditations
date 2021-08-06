import React from 'react';
import ReactDOM from 'react-dom';
import DropDownNums from './DropDownNums';
import { AiOutlineShoppingCart, AiFillStar } from 'react-icons/Ai';
import ShareIcons from '../ProductText/ShareIcons';

let CartDetails = (props) => {
  let itemDetails = props.itemDetails;

  return (
    <div id="wrapperCarDiv">
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

      </div>
      <div id="carandstar">
        <AiOutlineShoppingCart className="cartIcon"/>
        <AiFillStar className="pdstar" />
      </div>
      <ShareIcons />
    </div>
  );
};

export default CartDetails;
