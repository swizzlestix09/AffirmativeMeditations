import React from 'react';
import config from '../../../config.js';
import axios from 'axios';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.options = ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'];
    this.sizeOptions = ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide']
    this.state = {
      selectedOption: null,
      summaryText: '',
      summaryBody: '',
      displayName: '',
      email: '',
      comfortValue: null,
      qualityValue: null,
      lengthValue: null,
      fitValue: null,
      characterObj: {},
      submitted: false
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleOptionChange(e) {
    this.setState({
      selectedOption: e.target.value
    });
  }

  handleTextChange(e) {
    this.setState({[e.target.name]: e.target.value});

  }

  render () {
    // const showHideClassName = ;
    return (
      <div className={this.props.show ? 'modal display-block' : 'modal display-none'}>
        <div className='modal-main'>
          {/* {this.props.children} */}
          <h2 className='write-review-h2'>Leave A Review</h2>
          <form className= 'recommend-product'>
            <div className='recommend-title'>Do you recommend this product?</div>
            <div className="radio-container">
              <label>
                <input type="radio" value='true' onChange={this.handleOptionChange} checked={this.state.selectedOption === 'true'} />
                Yes
              </label>
              <label>
                <input type="radio" value='false' onChange={this.handleOptionChange} checked={this.state.selectedOption === 'false'}/>
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
          <input className='nickName' onChange={this.handleTextChange} name='displayName' placeholder='Example: jackson11!'></input>
          <p className='privacy'>For privacy reasons, do not use your full name or email address</p>
          <label>Email</label>
          {/* <br/> */}
          <input className='email' onChange={this.handleTextChange} name='email' placeholder='Example: jackson11!'></input>
          <p className='authentication'>For authentication reasons, you will not be emailed</p>
          <button type="button" onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );


  }


}


export default Modal