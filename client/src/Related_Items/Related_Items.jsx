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
      relatedListEndIdx: 3,
      myOutfitList: []
    }
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
    this.getProductImage = getProductImage.bind(this);
    this.getProductRating = getProductRating.bind(this);
    this.addIdx = this.addIdx.bind(this);
    this.subtractIdx = this.subtractIdx.bind(this);
  }

  getRelatedProducts() {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.productID}/related`,
      {headers: {Authorization: config.TOKEN}})
    .then((results) => {
      this.setState({relatedProductsList: results.data})
    })
    this.setState({relatedListEndIdx: 3})
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
    let newArray = origArray.filter(item => item !== removeID)
    this.setState({myOutfitList: newArray});
  }

  addIdx(e) {
    if (e.target.className.includes('related')) {
      if (this.state.relatedListEndIdx < this.state.relatedProductsList.length - 1) {
        this.setState({relatedListEndIdx: this.state.relatedListEndIdx + 1});
      }
    }
    // else if (e.target.className.includes('outfit')) {
    // }
  }

  subtractIdx(e) {
    let temp;
    if (e.target.className.includes('related')) {
      if (this.state.relatedListEndIdx > 3) {
        this.setState({relatedListEndIdx: this.state.relatedListEndIdx - 1})
      }
    }
  }

  render() {
    let slicedRelated = this.state.relatedProductsList.slice(this.state.relatedListEndIdx - 3, this.state.relatedListEndIdx);
    return (
      <>
        <h1>Hello Related Items</h1>
        <div id="related-items">
        <p className='carousel-control related' onClick={this.subtractIdx}>❮</p>
          {slicedRelated.map((product) => {
            return <div><Card
            key={product}
            getRelatedProducts={this.getRelatedProducts}
            productID={product}
            productFeatures={this.props.productFeatures}
            changeState={this.props.changeState}
            outfitCard={false} /></div>
          })}
          <p className='carousel-control related' onClick={this.addIdx}>❯</p>
        </div>
        <h1>Hello My Outfit</h1>
        <div id='my-outfit'>
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
              outfitCard={true}
              removeFromOutfit={this.removeFromOutfit} />
          })}
        </div>
        <slickTest />
      </>
    )
  }
}

export default RelatedItems;