import React from 'react';
import ReactDOM from 'react-dom';
import ProductDesc from './ProductDesc';


let ProductInformation = (props) => {
  return (
    <div className="productInfo">
      <div className="pdcategory">{props.productInfo.category}</div>
      <div className="productName">{props.productInfo.name}</div>

      <ProductDesc
        slogan={props.productInfo.slogan}
        desc={props.productInfo.description}
        features={
          props.productInfo.features.length > 0
            ? props.productInfo.features
            : null
        }
      />
    </div>
  );
};

export default ProductInformation;
