import React from 'react';
import axios from 'axios';
import config from '../../../config'

function getProductData(productID) {
  axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/`,
    {headers: {Authorization: config.TOKEN}})
    .then(results => {
      this.setState({
        "id": results.data.id,
        "name": results.data.name,
        "category": results.data.category,
        "default_price": results.data.default_price,
        "features": results.data.features
      })
    })
  }

function getProductImage(productID) {
  axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/styles`,
    {headers: {Authorization: config.TOKEN}})
    .then(results => {
      // find the default style
      let defaultIdx = 0;
      for (let i = 0; i < results.data.results.length; i++) {
        if (results.data.results[i]["default?"]) {
          defaultIdx = i;
        }
      }
      let photosArray = results.data.results[defaultIdx].photos.map((style) => {
        return style.thumbnail_url;
      });
      this.setState({
        "photos": photosArray
      })
    })
  }

function getProductRating(productID) {
  axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta/?product_id=${productID}`,
    {headers: {Authorization: config.TOKEN}})
    .then(results => {
      const ratingsMetadata = Object.entries(results.data.ratings);
      let numerator = 0;
      let denominator = 0;
      let rating = 0;
      for (let i = 0; i < ratingsMetadata.length; i++) {
        numerator += (ratingsMetadata[i][0] * parseInt(ratingsMetadata[i][1]));
        denominator += parseInt(ratingsMetadata[i][1]);
      }
      rating = numerator / denominator;
      this.setState({
        "rating": rating
      })
    })
  }

export {
  getProductData,
  getProductImage,
  getProductRating
}