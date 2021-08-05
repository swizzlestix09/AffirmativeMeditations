import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './ProductDetail/ProductDetail.js';
import sampleData from './sampleData.jsx';

import Main from '../src/Reviews_Ratings/main.jsx';
import RelatedItems from '../src/Related_Items/Related_Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: sampleData.id,
      productName: sampleData.name,
      productCategory: sampleData.category,
      productPrice: sampleData.default_price,
      productFeatures: sampleData.features
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(newState) {
    this.setState(newState);
  }

  render() {
    console.log('app component state', this.state.productID);
    return (
      <div className="mainPg">
        <ProductDetail data={this.state}/>  <br />

        <RelatedItems
          productID={this.state.productID}
          productName={this.state.productName}
          productCategory={this.state.productCategory}
          productPrice={this.state.productPrice}
          productFeatures={this.state.productFeatures}
          changeState={this.changeState} /><br></br>
        <Main productId={this.state.productID}/><br>
        </br>
      </div>
    );
  }
}

export default App;

//test did this work
