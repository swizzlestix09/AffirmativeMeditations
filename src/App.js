/* eslint-disable no-useless-constructor */
import React from "react";
import axios from "axios";
import utils from "./utils";
import "./App.css";
import Affirm from "./Affimations/Affirm";
import Stopwatch from "./Timer/Stopwatch";
import Music from "./Music/Music";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amtInDb: 0,
      currentQuote: ""
    };
    this.randomizeNumber = this.randomizeNumber.bind(this);
    this.randomizeQuote = this.randomizeQuote.bind(this);
    this.changeQuote = this.changeQuote.bind(this);
  }

  componentDidMount() {
    this.randomizeNumber();
  }

  changeQuote() {
    this.randomizeNumber();
  }

  randomizeNumber() {
    axios
      .get("/count")
      .then((res) => {
        this.setState({ amtInDb: res.data });
      })
      .then(() => {
        this.randomizeQuote(utils.randomizeAffirmation(this.state.amtInDb));
      })
      .catch((err) => {
        console.log(err);
        this.setState({ amtInDb: "Error Retrieving Data..." });
      });
  }

  randomizeQuote(ID) {
    axios
      .get("/quote", {
        params: {
          id: ID,
        },
      })
      .then((res) => {
        this.setState({ currentQuote: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="app">
        <span className="title">Mantra Meditations</span>
        <Stopwatch />
        <Affirm
          mantra={this.state.currentQuote}
          changeQuote={this.changeQuote}
        />
        <Music/>
      </div>
    );
  }
}

export default App;
