import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnails from './Thumbnails';
import Carosel from './Carosel';

let CaroselImg = (props) => {

  return (
    <img className="caroselImgs"
      src={props.image}
    />
  );
};

export default CaroselImg;