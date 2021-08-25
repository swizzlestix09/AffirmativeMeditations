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
    };
    this.pauseTimer = this.pauseTimer.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.tick = this.tick.bind(this);
    this.pausedOrSrt = this.pausedOrSrt.bind(this);
    this.stop = this.stop.bind(this);
  }

  changeSeconds() {
    let sec = this.state.seconds;
    if (this.state.seconds >= 0) {
      this.setState({ seconds: sec-- });
    }
  }

  changeMinutes() {
    let min = this.state.minutes;
    if (this.state.seconds === 0 && this.state.minutes > 0) {
      this.setState({ minutes: min-- });
    }
  }

  tick() {
    console.log('ayyyyyy')
  }

  stop(){
    console.log('eeeeyyyyy')
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
    return (
      <div>
        <p>
          {this.state.minutes}:{" "}
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
