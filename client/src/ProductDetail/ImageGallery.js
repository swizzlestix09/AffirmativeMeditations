import React from 'react';
import ReactDOM from 'react-dom';
import Carosel from './Carosel';
import Thumbnails from './Thumbnails';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="imageGallery">
        <Carosel item={this.props.product.photos} />
        <Thumbnails images={this.props.product.photos} />
      </div>
    );

  }
}

export default ImageGallery;
