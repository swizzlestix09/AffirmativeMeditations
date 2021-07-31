import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Carosel from './Carosel';
import config from './../../../config';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
    this.loadProduct = this.loadProduct.bind(this);
  }

  componentDidMount() {
    this.loadProduct();
  }

  loadProduct() {
    var config = {
      method: 'get',
      url: `http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.data.productID}/styles`,
      headers: {
        'Authorization': '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'
      },
    };

    axios(config)
      .then( (res) => {
        this.setState( { product: res.data } );
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.product === null) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Carosel product={this.state.product} />
      </div>
    );
  }

}

export default ProductDetail;