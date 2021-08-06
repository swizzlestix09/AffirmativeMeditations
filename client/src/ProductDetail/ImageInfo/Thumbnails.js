import { VscArrowSmallLeft, VscArrowSmallRight } from 'react-icons/Vsc';
import { IconContext } from 'react-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import Carosel from './Carosel';

let Thumbnails = (props) => {
  return (
    <div className="caroselThumbs">
      {props.images.map((imgs, index) => (
        index === props.currentImg ?
          <div key={index.toString()} className="thumb">
            <img
              key="index"
              className="pdthumbs"
              style={ {
                'borderColor': props.selectedClr,
                'borderBottomStyle': props.selectedBorder,
                'borderLeftStyle': props.selectedBorder
              } }
              src={imgs.thumbnail_url}
              onClick={() => props.setcurrentImg(index)}
            />
          </div>
          :
          <div key={index.toString()} className="thumb">
            <img
              key="index"
              className="thumbs"
              src={imgs.thumbnail_url}
              onClick={() => props.setcurrentImg(index)}
            />
          </div>
      ))}
    </div>
  );

};

export default Thumbnails;
