
import React from 'react';
import sampleData from './sampleData.jsx';
import QnA from './QnA/QnA';
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
    return (
      <>
        <h1>
          Hello Team Aloe
        </h1>
        Our state now exists.<br>
        </br>Product ID: {this.state.productID}<br>
        </br>Product Name: {this.state.productName}<br>
        </br>Product Features: {this.state.features}<br>
        </br><Main /><br>
        </br><RelatedItems
                productID={this.state.productID}
                productName={this.state.productName}
                productCategory={this.state.productCategory}
                productPrice={this.state.productPrice}
                productFeatures={this.state.productFeatures}
                changeState={this.changeState} /><br></br>
      </>
    );
  }
}

export default App;

//test did this work
