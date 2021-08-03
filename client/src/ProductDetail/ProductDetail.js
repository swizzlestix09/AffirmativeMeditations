import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Carosel from './Carosel';
import pat from './../../../config';
import ImageGallery from './ImageGallery';
import ProductInformation from './ProductInformation';


class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      productInfo: null,
      default: null
    };
    this.loadProductStyle = this.loadProductStyle.bind(this);
    this.findDefault = this.findDefault.bind(this);
  }

  componentDidMount() {
    this.loadProductStyle();
  }

  loadProductStyle() {
    var config = {
      method: 'get',
      url: `http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.data.productID}/styles`,
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

    config.url = `http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.data.productID}`;
    axios(config)
      .then( (res) => {
        this.setState( { productInfo: res.data } );
      })
      .catch( () => {
        return <div> Something's Wrong</div>;
        console.log('err');
      });

  }

  findDefault() {
    let productTypes = this.state.product.results;
    productTypes.forEach(type => {
      if (type['default?']) {
        this.setState( {default: type});
      }
    });
  }
  render() {
    if (this.state.default === null) {
      return <div className="productDetail">Loading...</div>;
    }

    return (
      <div className="productDetails">
        <ImageGallery product={this.state.default} />
        <ProductInformation productInfo={this.state.productInfo } styleInfo={this.state.product.results}/>
      </div>
    );
  }

}

export default ProductDetail;