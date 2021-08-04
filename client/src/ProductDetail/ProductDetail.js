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
      selectedStyle: null,
      defaultStyle: null
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
        console.log(res.data);
        this.setState( { selectedStyle: res.data } );
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
        this.setState( { product: res.data } );
      })
      .catch( () => {
        return <div> Something's Wrong</div>;
        console.log('err');
      });

  }

  findDefault() {
    let productTypes = this.state.selectedStyle.results;
    productTypes.forEach(type => {
      if (type['default?']) {
        this.setState( {defaultStyle: type});
      }
    });
  }

  render() {
    console.log('def ', this.state.defaultStyle,'prod ', this.state.product, 'styles ', this.state.selectedStyle);
    if (this.state.defaultStyle === null || this.state.product === null) {
      return <div className="productDetail">Loading...</div>;
    }
    return (
      <div className="productDetails">
        <Styles products={this.props.data.product} default={this.state.defaultStyle} />
        <ProductInformation productInfo={ this.state.product } />
      </div>
    );
  }

}

export default ProductDetail;

//this.state.eachStyle === null ||