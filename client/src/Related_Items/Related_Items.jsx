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
      myOutfitList: [],
      outfitListEndIdx: 2
    }
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
    this.getProductImage = getProductImage.bind(this);
    this.getProductRating = getProductRating.bind(this);
    this.addIdx = this.addIdx.bind(this);
    this.subtractIdx = this.subtractIdx.bind(this);
    this.addIdxButton = this.addIdxButton.bind(this)
    this.subtractIdxButton = this.subtractIdxButton.bind(this);
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
    else if (e.target.className.includes('outfit')) {
      if (this.state.outfitListEndIdx < this.state.myOutfitList.length - 1) {
        this.setState({outfitListEndIdx:this.state.outfitListEndIdx + 1})
      }
    }
  }

  subtractIdx(e) {
    let temp;
    if (e.target.className.includes('related')) {
      if (this.state.relatedListEndIdx > 3) {
        this.setState({relatedListEndIdx: this.state.relatedListEndIdx - 1})
      }
    } else if (e.target.className.includes('outfit')) {
      if (this.state.outfitListEndIdx > 2) {
        this.setState({outfitListEndIdx: this.state.outfitListEndIdx - 1})
      }
    }
  }

  addIdxButton(list) {
    if (list === 'related') {
      if (this.state.relatedProductsList.length > 3) {
        if (this.state.relatedListEndIdx < this.state.relatedProductsList.length - 1) {
          return (
            <p className='carousel-control related' onClick={this.addIdx}>❯</p>
          )
        } else {
          return null;
        }
      }
    } else if (list === 'outfit') {
      if (this.state.myOutfitList.length > 2) {
        if (this.state.outfitListEndIdx < this.state.myOutfitList.length - 1) {
          return (
            <p className='carousel-control outfit' onClick={this.addIdx}>❯</p>
          )
        } else {
          return null;
        }
      }
    }
  }

  subtractIdxButton(list) {
    if (list === 'related') {
      if (this.state.relatedListEndIdx > 3) {
        return (
          <p className='carousel-control related' onClick={this.subtractIdx}>❮</p>
        )
      } else {
        return null;
      }
    } else if (list === 'outfit') {
      if (this.state.outfitListEndIdx > 2) {
        return (
          <p className='carousel-control outfit' onClick={this.subtractIdx}>❮</p>
        )
      } else {
        return null;
      }
    }
  }

  render() {
    let slicedRelated = this.state.relatedProductsList.slice(this.state.relatedListEndIdx - 3, this.state.relatedListEndIdx);
    let slicedOutfit;
    if (this.state.myOutfitList.length > 2) {
      slicedOutfit = this.state.myOutfitList.slice(this.state.outfitListEndIdx - 2, this.state.outfitListEndIdx);
    } else {
      slicedOutfit = this.state.myOutfitList;
    }
    return (
      <>
        <h1>Hello Related Items</h1>
        <div id="related-items">
          <div className="carousel-control">
            {this.subtractIdxButton('related')}
          </div>
          {slicedRelated.map((product) => {
            return <div><Card
            key={product}
            getRelatedProducts={this.getRelatedProducts}
            productID={product}
            productFeatures={this.props.productFeatures}
            changeState={this.props.changeState}
            outfitCard={false} /></div>
          })}
          <div className="carousel-control">
            {this.addIdxButton('related')}
          </div>
        </div>
        <h1>Hello My Outfit</h1>
        <div id='my-outfit'>
          <div className="carousel-control">
            {this.subtractIdxButton('outfit')}
          </div>
          <div className='card outfit-item'>
            <p className='plus' onClick={this.addToOutfit}>+</p>
          </div>
          {slicedOutfit.map((outfitID) => {
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
          <div className="carousel-control">
            {this.addIdxButton('outfit')}
          </div>
        </div>
      </>
    )
  }
}

export default RelatedItems;