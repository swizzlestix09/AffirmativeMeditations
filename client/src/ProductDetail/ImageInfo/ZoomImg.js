import React from 'react';
// import Carosel from './Carosel';

class ZoomImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      img: '',
      x: 0,
      y: 0
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  setXandYCoords(x, y) {

  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    console.log(props);
    return (
      <div className='modal'>
        Im here
      </div>
    );
  }
}

export default ZoomImg;
