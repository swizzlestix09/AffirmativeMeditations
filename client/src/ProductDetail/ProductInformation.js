import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageGallery from './ImageGallery';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('in prodinfo ', this.props);
    return (
      <div>
        {this.props.category}
      </div>
    );
  }
}

export default ProductInformation;