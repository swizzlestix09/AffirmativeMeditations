import React from 'react';
import axios from 'axios';
import config from './../../../config';

class QnA extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      questions: {}
    }
  }

  componentDidMount() {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/?product_id=${this.props.productID}`,
      {headers: {Authorization: config.TOKEN}})
    .then((results) => {
      console.log(results);
      this.setState({questions: results.data.results})
    })
    .then(() => {
      console.log(this.state);
    })
  }

  render() {
    return (
      <div id="QnA">
      </div>
    )
  }
}

export default QnA;