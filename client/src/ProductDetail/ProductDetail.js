import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import pat from './../../../config';
import ProductInformation from './ProductText/ProductInformation';
import Carosel from './ImageInfo/Carosel';
import StyleSelector from './StylesInfo/StyleSelector';
import CartDetails from './AddCart/CartDetails';
import {loadProductStyle} from './../shared/getQueryData';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: this.props.data.productID,
      selectedColor: 'silver',
      selectedBorder: 'double ',
      product: null,
      allStyles: null,
      defaultStyle: null,
      selectedStyle: null,
      skuinfo: null,
      qtyOfsz: 0,
      qtyForCart: 0,
      price: [],
      styleName: null,
    };

    this.loadProductStyle = loadProductStyle.bind(this);
    this.findDefault = this.findDefault.bind(this);
    this.setSelectedStyle = this.setSelectedStyle.bind(this);
    this.addQuantitiestoDropDown = this.addQuantitiestoDropDown.bind(this);
    this.changeProductID = this.changeProductID.bind(this);
  }

  componentDidMount() {
    this.loadProductStyle(this.props.data.productID);
  }

  componentDidUpdate(prevState) {
    if (prevState.data.productID !== this.props.data.productID) {
      this.loadProductStyle();
      this.changeProductID(this.props.data.productID);
    }
  }

  setSelectedStyle(styleSelected) {
    this.setState({
      selectedStyle: styleSelected,
      skuinfo: styleSelected.skus,
      price: [styleSelected.original_price, styleSelected.sale_price],
      styleName: styleSelected.name,
    });
  }

  findDefault() {
    let productTypes = this.state.allStyles.results;

    if (productTypes.length === 1) {
      this.setSelectedStyle(productTypes[0]);
    } else {
      productTypes.forEach((type) => {
        if (type['default?']) {
          this.setSelectedStyle(type);
        }
      });
    }
    this.setSelectedStyle(productTypes[0]);
  }

  addQuantitiestoDropDown(qty) {
    this.setState({ qtyOfsz: qty });
  }

  changeProductID(id) {
    this.setState({ productID: id });
  }



  render() {
    if (this.state.selectedStyle === null || this.state.product === null) {
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
          selectClr={this.state.selectedColor}
          selectedBrdr={this.state.selectedBorder}
        />
        <div className="pdProductInfo">
          <ProductInformation productInfo={this.state.product} />
          <StyleSelector
            products={this.state.allStyles}
            setStyle={this.setSelectedStyle}
            prices={this.state.price}
            name={this.state.styleName}
          />
          <CartDetails
            itemDetails={this.state.skuinfo}
            qty={this.addQuantitiestoDropDown}
            amountForDropDown={this.state.qtyOfsz}
            selectClr={this.state.selectedColor}
          />
        </div>
      </div>
    );
  }
}

export default ProductDetail;

//this.state.eachStyle === null ||
