/* eslint-disable no-useless-constructor */
import React from 'react';
import axios from 'axios';
import utils from './utils';
import './App.css';
import Affirm from './Affimations/Affirm';
import Stopwatch from './Timer/Stopwatch';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amtInDb: 0,
      currentQuote: ''
    }
    this.randomizeNumber = this.randomizeNumber.bind(this);
    this.randomizeQuote = this.randomizeQuote.bind(this);
    this.changeQuote = this.changeQuote.bind(this);
  }

  componentDidMount(){
   this.randomizeNumber();
  }

  changeQuote() {
    this.randomizeNumber();
  }

  randomizeNumber() {
    axios.get('/count')
    .then(res => {
      this.setState( {amtInDb: res.data } );
    })
    .then( () => {
      this.randomizeQuote( utils.randomizeAffirmation(this.state.amtInDb) );
    })
    .catch(err => {
      console.log(err)
    })
  }

  randomizeQuote(ID) {
    axios.get('/quote', {
      params: {
        id: ID
      }
    })
    .then(res => {
      console.log('in rand q func ', res);
      this.setState( {currentQuote: res.data })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    console.log(this.state.amtInDb, this.state.currentQuote)
    return (
      <div className="App">
        <p>Mantra Meditations</p>
        <Stopwatch />
        <Affirm mantra={this.state.currentQuote} changeQuote={this.changeQuote}/>
      </div>
    );
  }
}

export default App;
