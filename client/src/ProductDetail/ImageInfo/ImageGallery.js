import React from 'react';
import ReactDOM from 'react-dom';
import Carosel from './Carosel';
import Thumbnails from './Thumbnails';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: null,
      selected: null
    };
  }

  render() {
    console.log('img gall props', this.props);
    return (
      <div className="imageGallery">
        <Carosel allPhotos={this.props.photos} />
      </div>
    );

  }
}

export default ImageGallery;
