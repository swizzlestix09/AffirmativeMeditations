import React from "react";
import Slide from "./Slider";
import SrtPsBtn from "./SrtPsBtn";
import Sound from 'react-sound';
import Dong from '../sounds/351909__tec-studio__bfxe5.mp3'


class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      timer: 0,
      seconds: 0,
      paused: false,
      timerDone: false
    };

    this.pauseTimer = this.pauseTimer.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.tick = this.tick.bind(this);
    this.pausedOrSrt = this.pausedOrSrt.bind(this);
    this.stopSound = this.stopSound.bind(this);
  }


  changeTime() {
    let sec;
    if (this.state.seconds === 0 && this.state.minutes > 0) {
      sec = 59;
      let mins = this.state.minutes - 1;
      this.setState({ minutes: mins, seconds: sec });
    } else if (this.state.seconds > 0 && this.state.minutes > -1) {
      sec = this.state.seconds - 1;
      this.setState({ seconds: sec });
    } else if (this.state.seconds === 0 && this.state.minutes === 0) {
      this.pauseTimer();
      this.setState({ timerDone : true });
    }

  }

  tick() {
    this.timer = setInterval(() => {
      this.changeTime();
    }, 1000);
  }

  stopSound(){
    var setSound = (!this.state.timerDone)
    this.setState( { timerDone: setSound } );
  }

  pausedOrSrt() {
    let ispaused = this.state.paused;
    this.setState({ paused: !ispaused });
    this.state.paused === true ? this.pauseTimer() : this.tick();
  }

  pauseTimer() {
    clearInterval(this.timer);
  }

  setTimer(val) {
    this.setState({ minutes: val });
  }

  render() {
    console.log('???', this.state.timer)
    return (
      <div>
        <p>
          {this.state.minutes} :{" "}
          {this.state.seconds < 10
            ? `0${this.state.seconds}`
            : this.state.seconds}
        </p>
        <SrtPsBtn
          pausedorsrt={this.pausedOrSrt}
          isPaused={this.state.paused}
          startTimer={this.tick}
        />
        <Slide setTimer={this.setTimer} />
        <Sound
          url={Dong}
          playStatus={this.state.timerDone ? Sound.status.PLAYING : Sound.status.STOPPED}
          onFinishedPlaying={this.stopSound}
        />
      </div>
    );
  }
}

export default Stopwatch;
