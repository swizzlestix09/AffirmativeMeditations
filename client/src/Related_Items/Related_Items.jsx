import React from 'react';
import config from './../../../config';
import Card from './Card';
import {
  getProductImage,
  getProductRating,
  getRelatedProducts
} from './../shared/getQueryData.jsx'
import {instanceOf} from 'prop-types';
import {withCookies, Cookies, CookiesProvider} from 'react-cookie';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      relatedProductsList: [],
      myOutfitList: this.props.cookies.get('myOutfitList') || [],
    }
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
    this.getProductImage = getProductImage.bind(this);
    this.getProductRating = getProductRating.bind(this);
    this.getRelatedProducts = getRelatedProducts.bind(this);
    this.handleCookie = this.handleCookie.bind(this);
  }

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  handleCookie = (newOutfitList) => {
    const {cookies} = this.props;
    cookies.set('myOutfitList', newOutfitList, {path: '/'});
    this.setState({myOutfitList: cookies.get('myOutfitList')});
  }

  componentDidMount() {
    this.getRelatedProducts(this.props.productID);
  }

  addToOutfit() {
    // TODO: Write logic to make sure outfit ID's are unique.
    if (!this.state.myOutfitList.includes(this.props.productID)) {
      let newOutfitList = [...this.state.myOutfitList, this.props.productID];
      this.setState({myOutfitList: newOutfitList});
      this.handleCookie(newOutfitList);
    }
  }

  removeFromOutfit(removeID) {
    let origArray = this.state.myOutfitList;
    let newArray = origArray.filter(item => item !== removeID)
    this.setState({myOutfitList: newArray});
    if (this.state.outfitListEndIdx > 2) {
      this.setState({outfitListEndIdx: this.state.outfitListEndIdx - 1})
    }
    this.handleCookie(newArray);
  }

  addIdx(e) {
    if (e.target.className.includes('related')) {
      if (this.state.relatedListEndIdx < this.state.relatedProductsList.length) {
        this.setState({relatedListEndIdx: this.state.relatedListEndIdx + 1});
      }
    }
    else if (e.target.className.includes('outfit')) {
      if (this.state.outfitListEndIdx < this.state.myOutfitList.length) {
        this.setState({outfitListEndIdx:this.state.outfitListEndIdx + 1})
      }
    }
  }

  carouselMove(e) {
    let carousel;
    if (e.target.className.includes('related')) {
      carousel = document.getElementById('related-items');
    } else if (e.target.className.includes('outfit')) {
      carousel = document.getElementById('my-outfit');
    }
    if (e.target.className.includes('c-left')) {
      carousel.scrollLeft -= 254;
    } else if (e.target.className.includes('c-right')) {
      carousel.scrollLeft += 254;
    }
  }

  render() {
    return (
      <CookiesProvider>
        <br></br>
        <div className='rrtitle'>RELATED PRODUCTS</div>
        <div className='carousel-wrapper-related'>
        <div className="carousel-control">
          <p className='carousel-control related c-left' onClick={this.carouselMove}>❮</p>
        </div>
        <div id="related-items">
          {this.state.relatedProductsList.map((product) => {
            return <div><Card
            key={product}
            productName={this.props.productName}
            getRelatedProducts={this.getRelatedProducts}
            productID={product}
            productFeatures={this.props.productFeatures}
            changeState={this.props.changeState}
            outfitCard={false} /></div>
          })}
        </div>
        <div className="carousel-control">
          <p className='carousel-control related c-right' onClick={this.carouselMove}>❯</p>
        </div>
        </div>
        <div className='rrtitle'>YOUR OUTFIT</div>
          <div className='carousel-wrapper-outfit'>
          <div className="carousel-control">
            <p className='carousel-control outfit c-left' onClick={this.carouselMove}>❮</p>
          </div>
          <div className='card outfit-item'>
            <p className='plus' onClick={this.addToOutfit}>+</p>
          </div>
          <div id="my-outfit">
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
        <div className="carousel-control">
          <p className='carousel-control outfit c-right' onClick={this.carouselMove}>❯</p>
        </div>
        </div>
      </CookiesProvider>
    )
  }
}

export default withCookies(RelatedItems);