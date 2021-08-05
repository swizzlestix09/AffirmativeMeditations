import React from 'react';
import ReactDOM from 'react-dom';
import StyleSelector from './StyleSelector';

let Price = (props) => {
  return (
    <div>
      {props.prices.includes(null) ? (
        <span>{props.prices[0]}</span>
      ) : (
        <span>
          <s className="salePrice">{props.prices[0]} </s>
          <br />
          {props.prices[1]}
        </span>
      )}
    </div>
  );
};
export default Price;
