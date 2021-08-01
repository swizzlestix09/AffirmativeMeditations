//http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles
import { VscArrowSmallLeft, VscArrowSmallRight } from 'react-icons/Vsc';
import { IconContext } from 'react-icons';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Thumbnails from './Thumbnails';

let Carosel = (props) => {
  let items = props.item.results;

  const [currentImg, setImg] = useState(0);
  const [isHidden, hideDiv] = useState(true);
  const [style, setStyle] = useState(style);
  let length = props.item.results.length - 1;

  if (!Array.isArray(items) || length === 0) {
    return null;
  }

  const rightClick = () => {
    currentImg === length ? setImg(0) : setImg(currentImg + 1);
  };

  const leftClick = () => {
    currentImg === 0 ? setImg(length) : setImg(currentImg - 1);
  };

  const zoomBox = (e) => {
    hideDiv(!isHidden);
    if (isHidden === false) return `position:absolute; left:${e.screenX}px; top:${e.screenY}px;` ;
  };

  const setCoords = (x, y) => {
    hideDiv(!isHidden);
    console.log(style, isHidden);
    return `position: absolute;
            left: ${x}px;
            border-style: solid;
            border-width: 2px;
            top:${y}px`;

  }

  return (
    <div className="carosel">
      <IconContext.Provider
        value={{ color: 'hsl(200, 2%, 65%)', size: '7%', className: 'arrows' }}
      >
        <VscArrowSmallLeft
          key="lArrow"
          className="left arrow"
          onClick={leftClick}
        />

        { isHidden ? null : <div className="lens" style={ {style} } /> }

        <img src={items[0].photos[currentImg].url} onClick={ e=> {
          const newStyle = setCoords(e.screenX, e.screenY);
          setStyle(newStyle);
        }} />

        <VscArrowSmallRight
          key="rArrow"
          className="right arrow"
          onClick={rightClick}
        />
      </IconContext.Provider>
    </div>
  );
};

export default Carosel;
