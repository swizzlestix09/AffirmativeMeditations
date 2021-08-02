import React from 'react';
import axios from 'axios';
import config from './../../../config';
import Card from './Card';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      relatedProductsList: [],
      myOutfitList: {}
    }
    this.getRelatedProducts = this.getRelatedProducts.bind(this)
  }

  getRelatedProducts() {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.productID}/related`,
      {headers: {Authorization: config.TOKEN}})
    .then((results) => {
      this.setState({relatedProductsList: results.data})
    })
  }

  componentDidMount() {
    this.getRelatedProducts();
  }

  componentDidUpdate() {
    this.getRelatedProducts();
  }

  render() {
    return (
      <>
        <h1>Hello Related Items</h1>
        <div id="related-items">
          {this.state.relatedProductsList.map((product) => {
            return <Card key={product} productID={product} changeState={this.props.changeState} />
          })}
        </div>
        <h1>Hello My Outfit</h1>
      </>
    )
  }
}

export default RelatedItems;