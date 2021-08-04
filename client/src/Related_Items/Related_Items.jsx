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
    // TODO: Write logic to make sure outfit ID's are unique.
    if (!this.state.myOutfitList.includes(this.props.productID)) {
      this.setState({myOutfitList: [...this.state.myOutfitList, this.props.productID]})
    }
  }

  removeFromOutfit(removeID) {
    let origArray = this.state.myOutfitList;
    let newArray = origArray.filter(item => item !== value)
    this.setState({myOutfitList: newArray});
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
            changeState={this.props.changeState}
            outfitCard={false} />
          })}
        </div>
        <h1>Hello My Outfit</h1>
        <div id="my-outfit">
          <div className='card outfit-item'>
            <p className='plus' onClick={this.addToOutfit}>+</p>
          </div>
          {this.state.myOutfitList.map((outfitID) => {
            return <Card
              // TODO: Refactor Card so that it can be used for both related products and outfit cards
              key={outfitID}
              getRelatedProducts={this.getRelatedProducts}
              productID={outfitID}
              productFeatures={this.props.productFeatures}
              changeState={this.props.changeState}
              outfitCard={true} />
          })}
        </div>
      </>
    )
  }
}

export default RelatedItems;