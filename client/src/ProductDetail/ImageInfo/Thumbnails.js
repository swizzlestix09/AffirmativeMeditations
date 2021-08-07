import { BsArrowsExpand } from 'react-icons/Bs';
import { IconContext } from 'react-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import Carosel from './Carosel';

let Thumbnails = (props) => {
  return (
    <div className="caroselThumbs">
      {props.images.map((imgs, index) => (
        (index > 6 && props.expandThumbs === false) ? null :
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
      <div className="thumb" onClick={ ()=>{ props.setThumbs(); } }>
        <BsArrowsExpand className='dwnupthumbs' />
      </div>
    </div>
  );

};

export default Thumbnails;
