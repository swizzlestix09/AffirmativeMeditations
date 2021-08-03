import React from 'react';
import ReactDOM from 'react-dom';
import { FaFacebookSquare, FaPinterestSquare, FaTwitterSquare } from 'react-icons/Fa';
import { IconContext } from 'react-icons';
import ProductDesc from './ProductDesc';


const ShareIcons = (props) => {
  return (
    <div className="shareBtns">
      <FaFacebookSquare
        key="fb"
        className="fb shareIcon"
      />

      <FaTwitterSquare
        key="tw"
        className="tw shareIcon"
      />

      <FaPinterestSquare
        key="pt"
        className="pt shareIcon"
      />


    </div>
  );
};

export default ShareIcons;