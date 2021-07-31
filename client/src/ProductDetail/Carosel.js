//http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles
import { VscArrowSmallLeft, VscArrowSmallRight } from 'react-icons/Vsc';
import { IconContext } from 'react-icons';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Thumbnails from './Thumbnails';

let Carosel = (props) => {
  let items = props.item.results;

  const [currentImg, setImg] = useState(0);
  const [isHidden, hideDiv] = useState(true);
  let length = props.item.results.length - 1;

  if ( (!Array.isArray(items)) || length === 0 ) {
    return null;
  }

  const rightClick = () => {
    currentImg === length ? setImg(0) : setImg(currentImg + 1);
  };

  const leftClick = () => {
    currentImg === 0 ? setImg(length) : setImg(currentImg - 1);
  };

  const iWasClicked = (e) =>{
    hideDiv(!isHidden);
    console.log(isHidden);
    console.log( 'x ', e.screenX, 'y ', e.screenY );
  };

  return (
    <div className="carosel">
      <IconContext.Provider value={{ color: 'hsl(200, 2%, 65%)', size: '7%', className: 'arrows'}} >
        <VscArrowSmallLeft key='lArrow' className="left arrow" onClick={leftClick} />
        <div className='lens' onClick={iWasClicked} style={{ display: isHidden ? "none" : "solid" }} />
        <img src={items[0].photos[currentImg].url} onClick={iWasClicked} />
        <VscArrowSmallRight key='rArrow'className="right arrow" onClick={rightClick} />
      </IconContext.Provider>
    </div>
  );

};

export default Carosel;
