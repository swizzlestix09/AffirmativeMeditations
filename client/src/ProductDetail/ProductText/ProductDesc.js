import React from 'react';
import ReactDOM from 'react-dom';
import ProductInformation from './ProductInformation';

const ProductDesc = (props) => {
  return (
    <div className="productDesc">
      <span className="slogan">{props.slogan}</span>
      <div className="description">{props.desc}</div>
      <ul className="features">
      <span>F E A T U R E S</span>
        {Array.isArray(props.features)
          ? props.features.map( (feat, idx) => { return <li className="feat pdcategory" key={idx.toString()}>{feat.feature} : {feat.value}</li>; } )
          : null}
      </ul>
    </div>
  );
};
export default ProductDesc;
