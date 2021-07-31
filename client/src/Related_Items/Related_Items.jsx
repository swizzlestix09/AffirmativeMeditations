import React from 'react';
import axios from 'axios';
import config from './../../../config';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      relatedProductsList: {},
      myOutfitList: {}
    }
  }

  componentDidMount() {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/?product_id=${this.props.productID}/related`,
      {headers: {Authorization: config.TOKEN}})
    .then((results) => {
      console.log(results);
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
      </div>
    )
  }
}

export default RelatedItems;