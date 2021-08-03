import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import pat from './../../../config';
import ProductInformation from './ProductText/ProductInformation';
import Styles from './StylesInfo/Styles';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
    this.loadProductStyle = this.loadProductStyle.bind(this);
  }

  componentDidMount() {
    this.loadProductStyle();
  }

  loadProductStyle() {
    var config = {
      method: 'get',
      url: `http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.data.productID}`,
      headers: {
        'Authorization': pat.TOKEN
      },
    };

    axios(config)
      .then( (res) => {
        this.setState( { product: res.data } );
      })
      .then( ()=>{
        this.findDefault();
      })
      .catch( () => {
        return <div> Something's Wrong</div>;
        console.log('err');
      });
  }

  render() {
    if (this.state.default === null) {
      return <div className="productDetail">Loading...</div>;
    }

    return (
      <div className="productDetails">
        <Styles product={this.props.data.productID} />
        <ProductInformation productInfo={this.state.product } />
      </div>
    );
  }

}

export default ProductDetail;