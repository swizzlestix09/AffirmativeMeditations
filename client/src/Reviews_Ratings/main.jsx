import React from 'react';
import config from '../../../config.js';
import axios from 'axios';
import Modal from './Modal.jsx';

class AppRR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currReview: 11007,
      reviews: {results: []},
      show: false,
      meta: []
    };
    this.getReviews = this.getReviews.bind(this);
    this.showModal = this.showModal.bind(this);
    this.dateConvert = this.dateConvert.bind(this);
    this.getMeta = this.getMeta.bind(this);
    this.average = this.average.bind(this);
    this.percentRecommend = this.percentRecommend.bind(this);
    this.numberReviews = this.numberReviews.bind(this);
    // this.hideModal = this.hideModal.bind(this);
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
    this.getReviews();
    this.getMeta();

  }

  getReviews () {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=${this.state.currReview}`,
      headers: {
        'Authorization': config.TOKEN
      }
    })
      .then ((result)=>{
        this.setState({reviews: result.data});
        // console.log(result);
        // console.log(this.state.reviews);
      })
      .catch((err)=>{
        console.log(err);
      });

  }

  getMeta () {
    return axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta?product_id=${this.state.currReview}`,
      headers: {
        'Authorization': config.TOKEN
      }
    })
      .then ((result)=>{
        this.setState({meta: result.data});
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
      var percent = (parseInt(this.state.meta.recommended.true) / (parseInt(this.state.meta.recommended.true) + parseInt(this.state.meta.recommended.false)))
      var percentString = parseFloat(percent * 100).toFixed(0) + '%';
      console.log(percentString, typeof percentString);
      console.log();
      return percentString;
    }
  }

  numberReviews () {
    if (this.state.meta.recommended === undefined) {
      return 'Still loading';
    } else {
      var numberReviews = parseInt(this.state.meta.recommended.true) + parseInt(this.state.meta.recommended.false);
      console.log(numberReviews);
      return numberReviews;
    }
  }

  render() {
    console.log(this.state.meta.product_id);
    var averageRating = this.average(this.state.meta.ratings);
    var averageStar = ((averageRating / 5) * 100).toString() + '%';
    this.numberReviews();


    return (
      <>
        <h2>Hello Ratings and Reviews </h2>
        <div id='metaRating' className ='metaRating'>
          <div> Average Rating</div>
          <div className = 'averageRating'>{averageRating}</div>
          <div className="star-ratings-css">
            <div className="star-ratings-css-top" style={{width: averageStar}}><span>★★★★★</span></div>
            <div className="star-ratings-css-bottom"><span className ="stars">★★★★★</span></div>
          </div>
          <div className ="percentRecommend">{this.percentRecommend (this.state.meta.recommended) + ' of reviewers recommend'} </div>
          <div className ="numberReviews">{this.numberReviews() + ' reviews '} </div>
        </div>
        <div id='messageFeed'> Reviews Feed
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
              </div>
            );
          })}
          <button className='button-addRev' type="button" onClick={this.showModal}>
            <p >ADD REVIEW +</p>
          </button>
        </div>

        <Modal onClose={this.showModal} show={this.state.show}></Modal>


      </>
    );
  }
}

export default AppRR;