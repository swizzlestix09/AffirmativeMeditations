import { VscArrowSmallLeft, VscArrowSmallRight } from 'react-icons/Vsc';
import { IconContext } from 'react-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import Carosel from './Carosel';

class Thumbnails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="thumbnail">
        {this.props.images.map((imgs, index) => (
          <span key={index.toString()} className="thumb">
            <img
              key="index"
              src={imgs.thumbnail_url}
              value={index.toString()}
              onClick={() => this.props.setcurrentImg(index)}
            />
          </span>
        ))}
      </div>
    );
  }
}

export default Thumbnails;
