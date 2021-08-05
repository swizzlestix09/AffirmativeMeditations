import React from 'react';
import ReactDOM from 'react-dom';

const DropDownNums = (props) => {
  let indivQty = props.qty;
  let qtyNums = [];
  indivQty > 15 ? indivQty = 15 : indivQty;

  for (let i = 0; i <= indivQty; i++) {
    qtyNums.push(<a className="ddlnums" key={i} href="#">{i}</a>);
  }
  return qtyNums;
};

export default DropDownNums;