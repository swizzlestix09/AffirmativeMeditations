import React from 'react';
import ReactDOM from 'react-dom';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import Carosel from '../ImageInfo/Carosel';


const StyleSelector = (props) => {
  return (
    <div className="stylesParent">
      { props.products.results.map( (style, index) => {
        return (
          <div key={index} className="thumbs">
            <img className="thumbs stylesselect" key={index} src={style.photos[0].thumbnail_url} onClick={ ()=>{ props.setStyle(style); } } />
          </div>
        );
      })
      }
    </div>
  );
};

export default StyleSelector;

