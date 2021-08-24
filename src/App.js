/* eslint-disable no-useless-constructor */
import React from 'react';
import axios from 'axios';
import utils from './utils';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amtInDb: 0
    }
  }
  componentDidMount(){
    axios.get('/count')
    .then(res => {
      this.setState( {amtInDb: res.data } );
      utils.randomizeAffirmation(this.state.amtInDb);
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <p>Hi</p>
      </div>
    );
  }
}

export default App;
