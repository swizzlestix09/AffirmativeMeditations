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
      </div>
    );
  }
}

export default App;

//test did this work
