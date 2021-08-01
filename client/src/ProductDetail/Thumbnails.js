import { VscArrowSmallLeft, VscArrowSmallRight } from 'react-icons/Vsc';
import { IconContext } from 'react-icons';
import React from 'react';
import ReactDOM from 'react-dom';

class Thumbnails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="thumbnail">
        { this.props.images.map( (imgs, index) =>
          <span>
            <img key="index" src={imgs.thumbnail_url} />
          </span>
        )}
      </div>
    );
  }
}

export default Thumbnails;