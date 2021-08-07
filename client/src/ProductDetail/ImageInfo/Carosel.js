//http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles
import { VscArrowSmallLeft, VscArrowSmallRight } from 'react-icons/Vsc';
import { IconContext } from 'react-icons';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Thumbnails from './Thumbnails';
import ZoomImg from './ZoomImg';
import CaroselImg from './CaroselImg';
import StyleSelector from '../StylesInfo/StyleSelector';

let Carosel = (props) => {
  const [currentImg, setImg] = useState(0);
  const [thumbAmt, limitThumbs] = useState(true);

  let length = props.allImages.length - 1;

  if (!Array.isArray(props.allImages) || length === 0) {
    return null;
  }

  const rightClick = () => {
    currentImg === length ? setImg(0) : setImg(currentImg + 1);
  };

  const leftClick = () => {
    currentImg === 0 ? setImg(length) : setImg(currentImg - 1);
  };

  const setAmtThumbs = () => {
    limitThumbs(!thumbAmt);
  };

  const setcurrentImg = (index) => {
    setImg(index);
  };

  const setCoords = (x, y) => {
    console.log(x, y);
  };

  return (
    <div className="styleCarosel">
      <div className="imagesAndArrows">


        <VscArrowSmallLeft
          id="pdarrows"
          key="lArrow"
          className="caroselArrows"
          onClick={leftClick}
        />


        <div className="imgAndThumbs">
          <Thumbnails
            images={props.allImages}
            setcurrentImg={setcurrentImg}
            currentImg={currentImg}
            selectedClr={props.selectClr}
            selectedBorder={props.selectedBrdr}
            setThumbs={setAmtThumbs}
            expandThumbs={thumbAmt}
          />
          <CaroselImg image={props.allImages[currentImg].url} />
        </div>

        <VscArrowSmallRight
          id="pdarrows"
          key="rArrow"
          className="caroselArrows"
          onClick={rightClick}
        />


      </div>
    </div>
  );
};

export default Carosel;
