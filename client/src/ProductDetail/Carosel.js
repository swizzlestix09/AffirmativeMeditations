//http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles
import { VscArrowSmallLeft, VscArrowSmallRight } from 'react-icons/Vsc';
import { IconContext } from 'react-icons';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Thumbnails from './Thumbnails';

let Carosel = (props) => {
  let items = props.item.results;

  const [currentImg, setImg] = useState(0);
  let length = props.item.results.length - 1;

  if ( (!Array.isArray(items)) || length === 0 ) {
    return null;
  }

  const rightClick = () => {
    currentImg === length ? setImg(0) : setImg(currentImg + 1);
    console.log('going up ', currentImg);
  };

  const leftClick = () => {
    currentImg === 0 ? setImg(length) : setImg(currentImg - 1);
    console.log(currentImg);
  };


  return (
    <div className="carosel">
      <IconContext.Provider value={{ color: 'hsl(200, 2%, 65%)', size: '5%', className: 'arrows'}} >
        <VscArrowSmallLeft key='lArrow' className="left arrow" onClick={leftClick} />
        <img src={items[0].photos[currentImg].url} />
        <VscArrowSmallRight key='rArrow'className="right arrow" onClick={rightClick} />
      </IconContext.Provider>
    </div>
  );
};

export default Carosel;
