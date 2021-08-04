import { VscArrowSmallLeft, VscArrowSmallRight } from 'react-icons/Vsc';
import { IconContext } from 'react-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import Carosel from './Carosel';

let Thumbnails = (props) => {
  return (
    <div className="thumbnail">
      {props.images.map((imgs, index) => (
        <span key={index.toString()} className="thumb">
          <img
            key="index"
            src={imgs.thumbnail_url}
            onClick={() => props.setcurrentImg(index)}
          />
        </span>
      ))}
    </div>
  );

};

export default Thumbnails;
