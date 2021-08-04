import React from 'react';
import ReactDOM from 'react-dom';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import Carosel from '../ImageInfo/Carosel';


const StyleSelector = (props) => {
  //useEffect
  return (
    <div>
      <div>
        { props.products.results.map( (style) => {
          return (
            <div className="cropSelectImg">
              <img src={style.photos[0].thumbnail_url} onClick={ ()=>{ props.setStyle(style); } } />
            </div>
          );
        })
        }
      </div>
    </div>
  );
};

export default StyleSelector;

