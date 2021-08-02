import React, {useState, useEffect} from 'react';
import axios from 'axios';
import config from '../../../config';

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      "id": 11003,
      "name": "Morning Joggers",
      "category": "Pants",
      "default_price": "40.00",
      "photos": [],
      "rating": 0
    }
    this.getProductData = this.getProductData.bind(this);
    this.getProductImage = this.getProductImage.bind(this);
    this.getProductRating = this.getProductRating.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  getProductData() {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.productID}/`,
      {headers: {Authorization: config.TOKEN}})
      .then(results => {
        this.setState({
          "id": results.data.id,
          "name": results.data.name,
          "category": results.data.category,
          "default_price": results.data.default_price
        })
      })
    }

  getProductImage() {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.productID}/styles`,
      {headers: {Authorization: config.TOKEN}})
      .then(results => {
        let photosArray = results.data.results[0].photos.map((style) => {
          return style.thumbnail_url;
        });
        this.setState({
          "photos": photosArray
        })
      })
    }

  getProductRating() {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta/?product_id=${this.props.productID}`,
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

  componentDidMount() {
    this.getProductData();
    this.getProductImage();
    this.getProductRating();
  }

  handleCardClick(e) {
    this.props.changeState({
      productID: this.state.id,
      productName: this.state.name
    })
  }

  render() {
    return (
      <div className="card" onClick={this.handleCardClick}>
        <img className="thumbnail" src={this.state.photos[0]}></img>
        <p className="category">{this.state.category}</p>
        <p className="name">{this.state.name}</p>
        <p className="price">${this.state.default_price}</p>
        <p className="rating">{this.state.rating}</p>
      </div>
    )
  }
}

// function Card({this.props.productID}) {

//   const getProductData = () => {
//     axios.get(
//       `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.productID}/`,
//       {headers: {Authorization: config.TOKEN}})
//       .then(results => {
//         // const returnObj = {
//         //   "id": results.data.id,
//         //   "name": results.data.name,
//         //   "category": results.data.category,
//         //   "default_price": results.data.default_price,
//         // }
//         setData({
//         "id": results.data.id,
//         "name": results.data.name,
//         "category": results.data.category,
//         "default_price": results.data.default_price,
//         "photos": data.photos,
//         "rating": data.rating
//       })
//     })
//     }

//   const getProductImage = () => {
//     axios.get(
//       `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.productID}/styles`,
//       {headers: {Authorization: config.TOKEN}})
//       .then(results => {
//         let photosArray = results.data.results[0].photos.map((style) => {
//           return style.thumbnail_url;
//         });
//         setData({
//           "id": data.id,
//           "name": data.name,
//           "category": data.category,
//           "default_price": data.default_price,
//           "photos": photosArray
//       })
//     })
//   }

//   const getProductRating = () => {
//     axios.get(
//       `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta/?product_id=${this.props.productID}`,
//       {headers: {Authorization: config.TOKEN}})
//       .then(results => {
//         const ratingsMetadata = Object.entries(results.data.ratings);
//         let numerator = 0;
//         let denominator = 0;
//         let rating = 0;
//         for (let i = 0; i < ratingsMetadata.length; i++) {
//           numerator += (ratingsMetadata[i][0] * parseInt(ratingsMetadata[i][1]));
//           denominator += parseInt(ratingsMetadata[i][1]);
//         }
//         rating = numerator / denominator;
//         setData({
//           "id": data.id,
//           "name": data.name,
//           "category": data.category,
//           "default_price": data.default_price,
//           "photos": data.photos,
//           "rating": rating
//       })
//     })
//   }

//   // let [data, setData] = useState(
//   //   {
//   //     "id": 11003,
//   //     "name": "Morning Joggers",
//   //     "category": "Pants",
//   //     "default_price": "40.00",
//   //     "photos": [],
//   //     "rating": 0
//   // })

//   // useEffect(async () => {
//   //   await Promise.all([
//   //     getProductImage(),
//   //     getProductData(),
//   //     getProductRating()
//   //   ])
//     // async function resolveAll() {
//     // }
//     // resolveAll();
//   // }, [])

//   return (
//     <div>
//       {/* {JSON.stringify(data)} */}
//     </div>
//   );
// }

export default Card;