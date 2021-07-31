//http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles
import { VscArrowSmallLeft, VscArrowSmallRight } from 'react-icons/Vsc';
import { IconContext } from 'react-icons';
import React from 'react';
import ReactDOM from 'react-dom';
// import '../productDetail.scss';

let Carosel = (props) => {
  console.log('prop prop proepr ', props);
  const rightClick = () => {
    console.log('eesh');
  };

  const leftClick = () => {
    alert('works');
  };
//when creating thumbnails if default is true populate in carosel
//onclick for thumbnail,

  return (
    <IconContext.Provider value={{ color: 'hsl(200, 2%, 65%)', size: '5%', className: 'arrows' }} >
      <div>
        <VscArrowSmallLeft className="arrows" onClick={leftClick} />
        <VscArrowSmallRight className="arrows" onClick={rightClick} />
      </div>
    </IconContext.Provider>
  );
};

export default Carosel;
