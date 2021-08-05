import React from 'react';
import config from '../../../config.js';
import axios from 'axios';
import CharRadio from './CharRadio';
// import config from '../../../config.js';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      rating: null,
      summaryText: '',
      summaryBody: '',
      recommend: null,
      displayName: '',
      email: '',
      photos: [],
      charObj: {},
      submitted: false,
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCharChange = this.handleCharChange.bind(this);
    this.handleIntChange = this.handleIntChange.bind(this);
    this.postReview = this.postReview.bind(this);
    this.handleBoolChange = this.handleBoolChange.bind(this);
  }

  postReview () {
    var body = {
      method: 'POST',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews`,
      headers: {
        'Authorization': config.TOKEN
      },
      data: {
        product_id: this.props.prodId,
        rating: this.state.rating,
        summary: this.state.summaryText,
        body: this.state.summaryBody,
        recommend: this.state.recommend,
        name: this.state.displayName,
        email: this.state.email,
        photos: this.state.photos,
        characteristics: this.state.charObj
        // characteristics: {36848: 4, 36849: 4, 36846: 4, 36847: 4 }
      }
    };
    console.log('post object body', body);
    axios(body)
      .then((res)=>{
        this.props.onClose();
        console.log('post worked', res);
      })
      .catch((err)=>{
        this.props.onClose();
        console.log('obj submitted', body);
        console.log(err);
      });
  }


  handleOptionChange(e) {
    this.setState({
      recommend: e.target.value
    });
  }


  // handleCharChange (name, choice) {
  //   if (this.state.charObj === null) {
  //     var copy = JSON.parse(JSON.stringify(this.props.characteristics));
  //     copy[name].value = choice;
  //     this.setState ({ charObj: copy});
  //   } else {
  //     var copy = JSON.parse(JSON.stringify(this.state.charObj));
  //     copy[name].value = choice;
  //     this.setState ({ charObj: copy});
  //   }

  // }

  handleCharChange (name, choice) {
    var copy = JSON.parse(JSON.stringify(this.state.charObj));
    if (name === 'Comfort') {
      copy[this.props.comfortId] = choice;
      this.setState ({ charObj: copy});
    }
    if (name === 'Quality') {
      copy[this.props.qualityId] = choice;
      this.setState ({ charObj: copy});
    }
    if (name === 'Size') {
      copy[this.props.sizeId] = choice;
      this.setState ({ charObj: copy});
    }
    if (name === 'Width') {
      copy[this.props.widthId] = choice;
      this.setState ({ charObj: copy});
    }
  }



  handleTextChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleIntChange(e) {
    var parse = parseInt(e.target.value);
    this.setState({[e.target.name]: parse});
  }

  handleBoolChange(e) {
    var bool;
    if (e.target.value === 'true') {
      bool = true;
    } else {
      bool = false;
    }
    this.setState({recommend: bool});
  }

  render () {
    // const showHideClassName = ;
    return (
      <div className={this.props.show ? 'modal display-block' : 'modal display-none'}>
        <div className='modal-main'>
          {/* {this.props.children} */}
          <h2 className='write-review-h2'>Leave A Review</h2>
          <label>Star Rating</label>
          <input className='starPlaceholder' onChange={this.handleIntChange} name='rating' placeholder='integer' ></input>
          <form className= 'recommend-product'>
            <div className='recommend-title'>Do you recommend this product?</div>
            <div className="radio-container">
              <label>
                <input type="radio" value='true' onChange={this.handleBoolChange} checked={this.state.recommend === true} />
                Yes
              </label>
              <label>
                <input type="radio" value='false' onChange={this.handleBoolChange} checked={this.state.recommend === false}/>
                  No
              </label>
            </div>
          </form>
          <div className="reviewsum-container">
            <label className="review-label">Quick Summary:</label>
            <textarea type="text" className = "textbox" onChange={this.handleTextChange} name='summaryText' value={this.state.summaryText} placeholder='CSS destroys my brain'/>
          </div>
          <div className="reviewsum-container">
            <label className="review-label">Full Review:</label>
            <textarea type="text" className = "fullbox" onChange={this.handleTextChange} name='summaryBody' value={this.state.summaryBody} placeholder='Nothing else to say. CSS destroyed my brain'/>
          </div>
          <label>Nickname</label>
          {/* <br/> */}
          <input className='nickName' onChange={this.handleTextChange} name='displayName' placeholder='Example: jackson11!' ></input>
          <p className='privacy'>For privacy reasons, do not use your full name or email address</p>
          <label>Email</label>
          {/* <br/> */}
          <input className='email' onChange={this.handleTextChange} name='email' placeholder='Example: jackson@jackson.com'></input>
          <p className='authentication'>For authentication reasons, you will not be emailed</p>
          <div className = 'radioOne'></div>
          <CharRadio change={this.handleCharChange} name='Comfort'/>
          <CharRadio change={this.handleCharChange} name='Quality'/>
          <CharRadio change={this.handleCharChange} name='Size'/>
          <CharRadio change={this.handleCharChange} name='Width'/>
          <button type="button" onClick={this.postReview}>Submit</button>
          <button type="button" onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );


  }


}


export default Modal;