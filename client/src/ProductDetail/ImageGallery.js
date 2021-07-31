import React from 'react';
import ReactDOM from 'react-dom';
import Carosel from './Carosel';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="imageGallery">
        <Carosel item={this.props.product} />
      </div>
    );

  }
}

export default ImageGallery;