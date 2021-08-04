import React from 'react';
import axios from 'axios';
import config from './../../../config';
import Card from './Card';
import {
  getProductImage,
  getProductRating
} from './getCardData.jsx'

class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      relatedProductsList: [],
      myOutfitList: []
    }
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.getProductImage = getProductImage.bind(this);
    this.getProductRating = getProductRating.bind(this);
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

  addToOutfit() {
    // TODO: refactor the setState portion of getCardData or create a new react component to use setstate here

    // let tempStorage = {state: {
    //   "id": this.props.productID,
    //   "name": this.props.productName,
    //   "category": this.props.category,
    //   "default_price": this.props.productPrice,
    //   "photos": [],
    //   "rating": 0,
    //   "features": []
    // }}
    // getProductImage.bind(tempStorage)(this.props.productID);
    // getProductRating.bind(tempStorage)(this.props.productID);
    // this.setState({
    //   myOutfitList: [...this.state.myOutfitList, tempStorage.state]
    // })
  }

  render() {
    return (
      <>
        <h1>Hello Related Items</h1>
        <div id="related-items">
          {this.state.relatedProductsList.map((product) => {
            return <Card
            key={product}
            getRelatedProducts={this.getRelatedProducts}
            productID={product}
            productFeatures={this.props.productFeatures}
            changeState={this.props.changeState} />
          })}
        </div>
        <h1>Hello My Outfit</h1>
        <div id="my-outfit">
          <div className='card outfit-item'>
            <p className='plus' onClick={this.addToOutfit}>+</p>
          </div>
        </div>
      </>
    )
  }
}

export default RelatedItems;