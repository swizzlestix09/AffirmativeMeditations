import React from 'react';
import ReactDOM from 'react-dom';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import Carosel from '../ImageInfo/Carosel';


const StyleSelector = (props) => {
  //useEffect
  return (
    <div>
      <div>
        { props.products.results.map( (style, index) => {
          return (
            <div key={index} className="cropSelectImg">
              <img className="style" key={index} src={style.photos[0].thumbnail_url} onClick={ ()=>{ props.setStyle(style); } } />
            </div>
          );
        })
        }
      </div>
    </div>
  );
};

export default StyleSelector;

