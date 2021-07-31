//http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles
import { VscArrowSmallLeft, VscArrowSmallRight } from 'react-icons/Vsc';
import { IconContext } from 'react-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnails from './Thumbnails';

let Carosel = (props) => {
  let items = props.item.results;
  console.log('item deets ', items)
  let current = 0;
  let length = props.item.results.length - 1;

  if ( (!Array.isArray(items)) || length === 0 ) {
    return null;
  }

  const rightClick = () => {
    current === length ? current = 0 : current++;
    console.log('going up ', current);
  };

  const leftClick = () => {
    current === 0 ? current = length : current--;
    console.log('going down ', current);
  };


  return (
    <section className="carosel">
      <IconContext.Provider value={{ color: 'hsl(200, 2%, 65%)', size: '5%', className: 'arrows' }} >
        <div>
          <VscArrowSmallLeft className="left arrow" onClick={leftClick} />
          <VscArrowSmallRight className="right arrow" onClick={rightClick} />
          {items[0].photos.map( (style, index) =>{
            console.log('stylessss ', style.url);
            return (
              <div>
                <img key={index} src={style.url} alt="clothes image"></img>
              </div>
            );
          })}
        </div>
      </IconContext.Provider>
    </section>
  );
};

export default Carosel;
