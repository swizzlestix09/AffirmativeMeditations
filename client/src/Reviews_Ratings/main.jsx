import React from 'react';
import config from '../../../config.js';
import axios from 'axios';
import Modal from './Modal.jsx';
import BarChart from './BarChart.jsx';
import Slider from './Slider.jsx';
//this.props.productID

class AppRR extends React.Component {
  constructor(props) {
    super(props);
    // this.props.productID;
    this.state = {
      // currReview: this.props.productID,
      reviews: {results: []},
      sort: 'relevant',
      show: false,
      meta: [],
      ratingsArrayPercent: [],
      reviewCount: 3,
      characteristics: {},
      comfortId: null,
      qualityId: null,
      sizeId: null,
      widthId: null,
      allReviews: {results: []}
    };
    this.getReviews = this.getReviews.bind(this);
    this.showModal = this.showModal.bind(this);
    this.dateConvert = this.dateConvert.bind(this);
    this.getMeta = this.getMeta.bind(this);
    this.average = this.average.bind(this);
    this.percentRecommend = this.percentRecommend.bind(this);
    this.numberReviews = this.numberReviews.bind(this);
    this.addReviews = this.addReviews.bind(this);
    this.changeSort = this.changeSort.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
    this.invokeGetReview = this.invokeGetReview.bind(this);

  }



  dateConvert(isoDate) {
    return new Date(isoDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
  }

  showModal (e) {
    this.setState({
      show: !this.state.show
    });
  }

  // hideModal (e) {
  //   this.setState({show: false});
  // }


  componentDidMount () {
    // this.setReview();
    this.getReviews(this.state.reviewCount, this.state.sort);
    this.getAllReviews();
    this.getMeta();

  }

  componentDidUpdate (prevProps) {
    if (this.props.productID !== prevProps.productID) {
      this.getReviews(this.state.reviewCount, this.state.sort);
      this.getAllReviews();
      this.getMeta();
    }
  }

  invokeGetReview () {
    this.getReviews(this.state.reviewCount, this.state.sort);
  }

  addReviews () {
    var newReviewCount = this.state.reviewCount + 2;
    this.setState({reviewCount: newReviewCount}, ()=>{
      // console.log('this triggered', this.state.reviewCount);
      this.getReviews(this.state.reviewCount, this.state.sort);

    });

  }

  changeSort (e) {
    this.setState({sort: e.target.value}, ()=>{
      // console.log('this triggered', this.state.reviewCount);
      this.getReviews(this.state.reviewCount, this.state.sort);

    });

  }


  getAllReviews () {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=${this.props.productID}`,
      headers: {
        'Authorization': config.TOKEN
      },

    })
      .then ((result)=>{
        this.setState({allReviews: result.data});
        // console.log(result.data);
        // console.log('reviews state', this.state.reviews);
      })
      .catch((err)=>{
        console.log(err);
      });

  }


  getReviews (count, sort) {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=${this.props.productID}`,
      headers: {
        'Authorization': config.TOKEN
      },
      params: {
        count: count,
        sort: sort
      }
    })
      .then ((result)=>{
        this.setState({reviews: result.data});
        // console.log(result.data);
        console.log('reviews state', this.state.reviews);
      })
      .catch((err)=>{
        console.log(err);
      });

  }

  getMeta () {
    return axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta?product_id=${this.props.productID}`,
      headers: {
        'Authorization': config.TOKEN
      }
    })
      .then ((result)=>{
        this.setState({
          meta: result.data,
          characteristics: result.data.characteristics,
          comfortId: result.data.characteristics.Comfort.id,
          qualityId: result.data.characteristics.Quality.id,
          sizeId: result.data.characteristics.Size.id,
          widthId: result.data.characteristics.Width.id
        });
        // console.log(result);
        // console.log(this.state.meta);
      })
      .catch((err)=>{
        console.log(err);
      });
  }


  average (obj) {
    var ratingStars = 0;
    var numberReviews = 0;
    var average;
    for (var key in obj) {
      numberReviews += parseInt(obj[key]);
      ratingStars += parseInt([key]) * parseInt(obj[key]);
    }
    average = ratingStars / numberReviews;
    average = average.toFixed(1);
    // console.log(numberReviews, totalStars, average);
    return average;
  }

  percentRecommend (obj) {
    if (obj === undefined) {
      return 'Still loading';
    } else {
      var recommend, dontRecommend;
      if (this.state.meta.recommended.true === undefined) {
        recommend = 0;
      } else {
        recommend = parseInt(this.state.meta.recommended.true);

      }
      if (this.state.meta.recommended.false === undefined) {
        dontRecommend = 0;
      } else {
        dontRecommend = parseInt(this.state.meta.recommended.false);

      }
      var percent = recommend / (recommend + dontRecommend);
      var percentString = parseFloat(percent * 100).toFixed(0) + '%';
      return percentString;
    }
  }



  numberReviews () {
    if (this.state.allReviews.results === undefined) {
      return 'Still loading';
    } else {
      var numberReviews = 0;
      for (var i = 0; i < this.state.allReviews.results.length; i++) {
        numberReviews += 1;
      }
      // console.log(numberReviews);
      return numberReviews;
    }
  }

  render() {
    // console.log('meta state', this.state.meta);
    // console.log('productId prop', this.props.productID);
    // console.log('total reviews', this.state.allReviews.results);
    // console.log('characteristics from main', this.state.characteristics)
    // console.log('productID from state', this.props.productID);
    var averageRating = this.average(this.state.meta.ratings);
    var averageStar = ((averageRating / 5) * 100).toString() + '%';
    this.numberReviews();

    return (
      <div>
        <div className='rrtitle'>{'RATINGS & REVIEWS'}   </div>
        <div className='ratingsReviewsContainer'>
          <div id='metaRating' className ='metaRating'>
            <div className = 'averageRating'>{averageRating}</div>
            <div className="star-ratings-css">
              <div className="star-ratings-css-top" style={{width: averageStar}}><span>★★★★★</span></div>
              <div className="star-ratings-css-bottom"><span className ="stars">★★★★★</span></div>
            </div>
            <div className ="percentRecommend">{this.percentRecommend (this.state.meta.recommended) + ' of reviewers recommend'} </div>
            {/* <div className ="numberReviews">{this.numberReviews() + ' reviews '} </div> */}
            <BarChart meta={this.state.meta} />
            <Slider characteristics={this.state.meta.characteristics} />
          </div>

          <div id='messageFeed'>
            <div className='sortedBy'>{this.numberReviews()} total reviews, sorted by
              <select className='selector' value={this.state.sort} onChange={this.changeSort}>
                <option value='relevant'>relevance</option>
                <option value='newest'>newest</option>
                <option value='helpful'>helpfulness</option>
              </select>
            </div>
            {this.state.reviews.results.map((item, i)=>{
              var star = ((item.rating / 5) * 100).toString() + '%';
              return (
                <div className = 'reviewContainer' key = {i} >
                  <div className = "star-name-date">
                    <div className="star-ratings-css">
                      <div className="star-ratings-css-top" style={{width: star}}><span>★★★★★</span></div>
                      <div className="star-ratings-css-bottom"><span className ="stars">★★★★★</span></div>
                    </div>
                    <div className='nameDate'>{item.reviewer_name + ', ' + this.dateConvert(item.date) }</div>
                  </div>
                  <div className='summary'>{item.summary }</div>
                  <div className='body'>{item.body}</div>
                  <div className='recommend'>{item.recommend ? '✔ I recommend this product' : null}</div>
                  <div className='helpful'>
                    <p className='helpword'>Helpful? </p>
                    <p className='yes'>{`Yes (${item.helpfulness}) | `}</p>
                    <p>Report</p>
                  </div>
                </div>
              );
            })}
            <div className = 'buttonContainer'>
              <button className='button-showMore' type="button" onClick={this.addReviews}>
                <p >More Reviews </p>
              </button>
              <button className='button-addRev' type="button" onClick={this.showModal}>
                <p >Submit Review </p>
              </button>
            </div>
          </div>

          <Modal comfortId={this.state.comfortId} qualityId={this.state.qualityId} sizeId={this.state.sizeId} widthId={this.state.widthId}
            prodId={this.props.productID} onClose={this.showModal} invokeGetReview={this.invokeGetReview}characteristics={this.state.characteristics} show={this.state.show}></Modal>

        </div>
      </div>
    );
  }
}

export default AppRR;