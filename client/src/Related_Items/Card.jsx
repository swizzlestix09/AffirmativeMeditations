import React, {useState, useEffect} from 'react';
import axios from 'axios';
import config from '../../../config';
import Modal from './Modal';
import {
  getProductData,
  getProductImage,
  getProductRating
} from './getCardData.jsx'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      "id": 11003,
      "name": "Morning Joggers",
      "category": "Pants",
      "default_price": "40.00",
      "photos": [],
      "rating": 0,
      "modalState": false,
      "features": [
        {
            "feature": "Fabric",
            "value": "100% Cotton"
        },
        {
            "feature": "Cut",
            "value": "Skinny"
        }
    ]
    }
    this.getProductData = getProductData.bind(this);
    this.getProductImage = getProductImage.bind(this);
    this.getProductRating = getProductRating.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  componentDidMount() {
    this.getProductData(this.props.productID);
    this.getProductImage(this.props.productID);
    this.getProductRating(this.props.productID);
  }

  handleCardClick(e) {
    this.props.changeState({
      productID: this.state.id,
      productName: this.state.name,
      productFeatures: this.state.features
    })
    this.props.getRelatedProducts();
  }

  render() {
    return (
      <div className="card" >
        {this.state.modalState &&
        (<Modal
          productFeatures={this.props.productFeatures}
          product2Features={this.state.features}
          closeModal={() => this.setState({modalState:false})}
        />)}
        <p className="open-modal" onClick={() => this.setState({modalState:true})}>⭒</p>
        <img className="thumbnail" src={this.state.photos[0]}></img>
        <p className="category">{this.state.category}</p>
        <p className="name" onClick={this.handleCardClick}>{this.state.name}</p>
        <p className="price">${this.state.default_price}</p>
        <p className="rating">{this.state.rating}</p>
      </div>
    )
  }
}

export default Card;