import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from '../ImageInfo/ImageGallery';
import ProductDesc from './ProductDesc';
import ShareIcons from './ShareIcons';

let ProductInformation = (props) => {
  console.log(props);
  return (
    <div className="productInfo">
      <span className="category">{props.productInfo.category}</span>
      <span className="productName">{props.productInfo.name}</span>
      <span className="price">{props.productInfo.default_price}</span>
      <ShareIcons />
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
