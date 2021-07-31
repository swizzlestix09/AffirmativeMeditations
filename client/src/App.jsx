
import React from 'react';
import sampleData from './sampleData.jsx';
import QnA from './QnA/QnA';
import Main from '../src/Reviews_Ratings/main.jsx';
import RelatedItems from '../src/Related_Items/Related_Items'

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
      <>
        <h1>
          Hello Team Aloe
        </h1>
        Our state now exists.<br>
        </br>Product ID: {this.state.productID}<br>
        </br>Product Name: {this.state.productName}<br>
        </br><Main /><br>
        </br><RelatedItems props={this.state.productID}/>
      </>
    );
  }
}

export default App;

//test did this work
