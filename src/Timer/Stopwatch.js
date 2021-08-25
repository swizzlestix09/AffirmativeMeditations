import React from "react";
import Slide from "./Slider";
import SrtPsBtn from "./SrtPsBtn";


class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      paused: false,
      intervalID: 0,
    };

    this.pauseTimer = this.pauseTimer.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.changeMinutes = this.changeMinutes.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.tick = this.tick.bind(this);
    this.pausedOrSrt = this.pausedOrSrt.bind(this);
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
      this.timer = clearInterval();
    }
  }

  changeMinutes() {
    console.log("after change ", this.state.minutes, this.state.seconds);
  }

  tick() {
    this.timer = setInterval(() => {
      this.changeTime();
  }, 1000)
  }

  pausedOrSrt() {
    let ispaused = this.state.paused;
    this.setState({ paused: !ispaused });
    this.state.paused === true ? this.stop() : this.tick();
  }

  pauseTimer() {}

  setTimer(val) {
    this.setState({ minutes: val });
  }

  render() {
    console.log("before change ", this.state.minutes, this.state.seconds);
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
      </div>
    );
  }
}


export default Stopwatch;