import React from 'react';
import axios from 'axios';
import config from './../../../config';
import Card from './Card';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      relatedProductsList: [{
        "id":11001,
        "campus":"hrnyc",
        "name":"Camo Onesie",
        "slogan":"Blend in to your crowd",
        "description":"The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category":"Jackets",
        "default_price":"140.00",
        "created_at":"2021-01-12T21:17:59.200Z",
        "updated_at":"2021-01-12T21:17:59.200Z"}],
      myOutfitList: {}
    }
  }

  componentDidMount() {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/?product_id=${this.props.productID}/related`,
      {headers: {Authorization: config.TOKEN}})
    .then((results) => {
      this.setState({relatedProductsList: results.data})
    })
    .then(() => {
      console.log(this.state);
    })
  }

  render() {
    return (
      <div id="related-items">
        <h1>Hello Related Items</h1>
        <Card props={this.state.relatedProductsList[0]} />
      </div>
    )
  }
}

export default RelatedItems;