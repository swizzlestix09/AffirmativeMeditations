import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Carosel from './Carosel';
import photos from './CaroselFixtures';
import config from './../../../config';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var data = '';
    console.log('MOUNT! ', this.props.data.productID)
    var config = {
      method: 'get',
      url: `http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.data.productID}/styles`,
      headers: {
        'Authorization': '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'
      },
      data : data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.props.data.productID);
    return (
      <div>
        <Carosel />
      </div>
    );
  }
}

export default ProductDetail;