import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import pat from './../../../config';
import ProductInformation from './ProductText/ProductInformation';
import Carosel from './ImageInfo/Carosel';
import StyleSelector from './StylesInfo/StyleSelector';
import CartDetails from './AddCart/CartDetails';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      allStyles: null,
      defaultStyle: null,
      selectedStyle: null,
      skuinfo: null,
      qtyOfsz: 0,
      qtyForCart: 0,
    };

    this.loadProductStyle = this.loadProductStyle.bind(this);
    this.findDefault = this.findDefault.bind(this);
    this.setSelectedStyle = this.setSelectedStyle.bind(this);
    this.addQuantitiestoDropDown = this.addQuantitiestoDropDown.bind(this);
    this.quantityForCart = this.quantityForCart.bind(this);
  }

  componentDidMount() {
    this.loadProductStyle();
  }

  loadProductStyle() {
    var config = {
      method: 'get',
      url: `http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.data.productID}/styles`,
      headers: {
        Authorization: pat.TOKEN,
      },
    };

    axios(config)
      .then((res) => {
        console.log(res.data);
        this.setState({ allStyles: res.data });
      })
      .then(() => {
        this.findDefault();
      })
      .catch(() => {
        return <div> Something's Wrong</div>;
        console.log('err');
      });

    config.url = `http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.data.productID}`;

    axios(config)
      .then((res) => {
        this.setState({ product: res.data });
      })
      .catch(() => {
        return <div> Something's Wrong</div>;
        console.log('err');
      });
  }

  setSelectedStyle(styleSelected) {
    this.setState({
      selectedStyle: styleSelected,
      skuinfo: styleSelected.skus
    });
  }

  findDefault() {
    let productTypes = this.state.allStyles.results;
    productTypes.forEach((type) => {
      if (type['default?']) {
        this.setState({
          defaultStyle: type,
          skuinfo: type.skus
        });
      }
    });
  }

  addQuantitiestoDropDown(qty) {
    console.log('aqtdd', qty);
    this.setState( {qtyOfsz: qty} );
    console.log(this.state.qtyOfsz);
  }

  quantityForCart(qty) {

  }


  render() {
    if (this.state.defaultStyle === null || this.state.product === null) {
      return <div className="productDetail">Loading...</div>;
    }
    return (
      <div className="productDetails">
        <Carosel
          allImages={
            this.state.selectedStyle === null
              ? this.state.defaultStyle.photos
              : this.state.selectedStyle.photos
          }
        />
        <div className="pdProductInfo">
          <ProductInformation productInfo={this.state.product} />
          <StyleSelector
            products={this.state.allStyles}
            setStyle={this.setSelectedStyle}
          />
          <CartDetails
            itemDetails={this.state.skuinfo}
            qty={this.addQuantitiestoDropDown}
            amountForDropDown={this.state.qtyOfsz} />
        </div>
      </div>
    );
  }
}

export default ProductDetail;

//this.state.eachStyle === null ||
