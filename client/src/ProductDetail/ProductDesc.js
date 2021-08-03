import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Carosel from './Carosel';
import config from './../../../config';
import ImageGallery from './ImageGallery';
import ProductInformation from './ProductInformation';

const ProductDesc = (props) => {
  return (
    <div className="productDesc">
      <span className="slogan">{props.slogan}</span>
      <div className="description">{props.desc}</div>
      <ul className="features">
        {Array.isArray(props.features)
          ? props.features.map( (feat, idx) => { return <li className="feat" key={idx.toString()}>{feat.feature} : {feat.value}</li>; } )
          : null}
      </ul>
    </div>
  );
};
export default ProductDesc;
