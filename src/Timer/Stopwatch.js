import React from 'react';
import Slide from './Slider';
import SrtPsBtn from './SrtPsBtn';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 0,
      seconds: 0,

      paused: false
    }
    this.pauseTimer = this.pauseTimer.bind(this);
    this.setTimer = this.setTimer.bind(this);
  }

  pauseTimer(){

  }

  setTimer(val){
    this.setState( {minutes: val} );
  }



  render() {

    return (
      <div>
        <p>{this.state.minutes}: {this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}</p>
      <SrtPsBtn />
      <Slide setTimer={this.setTimer}/>
      </div>
    );
  }
}

export default Stopwatch;
