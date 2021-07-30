import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './ProductDetail/ProductDetail.js';
import sampleData from './sampleData.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: sampleData.id,
      productName: sampleData.name,
    };
  }


  render() {
    return (
      <div>
        <ProductDetail data={this.state}/>
        <h1>
          Hello Team Aloe
        </h1>
        Our state now exists.<br>
        </br>Product ID: {this.state.productID}<br>
        </br>Product Name: {this.state.productName}
      </div>
    );
  }
}

export default App;

//test did this work
