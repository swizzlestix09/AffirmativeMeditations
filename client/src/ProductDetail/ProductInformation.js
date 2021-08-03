import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from './ImageGallery';
import ProductDesc from './ProductDesc';
import ShareIcons from './ShareIcons';
import StyleSelector from './StyleSelector';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.productInfo === null) {
      return <div className="productDetail">Loading...</div>;
    }

    console.log('product info ', this.props.styleInfo);
    return (
      <div className="productInfo">
        <span className="category">{this.props.productInfo.category}</span>
        <span className="productName">{this.props.productInfo.name}</span>
        <span className="price">{this.props.productInfo.default_price}</span>
        <StyleSelector styles={this.props.styleInfo} />
        <ShareIcons />
        <ProductDesc
          slogan={this.props.productInfo.slogan}
          desc={this.props.productInfo.description}
          features={
            this.props.productInfo.features.length > 0
              ? this.props.productInfo.features
              : null
          }
        />
      </div>
    );
  }
}

export default ProductInformation;
