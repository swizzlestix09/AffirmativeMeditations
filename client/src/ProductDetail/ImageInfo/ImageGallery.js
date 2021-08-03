import React from 'react';
import ReactDOM from 'react-dom';
import Carosel from './Carosel';
import Thumbnails from './Thumbnails';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: null
    };
  }

  render() {
    console.log('img gall props', this.props);
    return (
      <div className="imageGallery">
      </div>
    );

  }
}

export default ImageGallery;
