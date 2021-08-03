import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import pat from './../../../../config';

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eachStyle: null,
      default: null,
      selected: null
    };
    this.loadStyles = this.loadStyles.bind(this);
    this.findDefault = this.findDefault.bind(this);
  }

  componentDidMount() {
    this.loadStyles();
    this.findDefault(this.state.eachStyle);
  }

  loadStyles() {
    var config = {
      method: 'get',
      url: `http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.product}/styles`,
      headers: {
        'Authorization': pat.TOKEN
      },
    };

    axios(config)
      .then( (res) => {
        console.log(res.data);
        this.setState( { eachStyle: res.data } );
      })
      .catch( () => {
        return <div> Something's Wrong</div>;
        console.log('err');
      });

  }

  findDefault(items) {
    items.forEach(style => {
      if (style['default?'] === true) {
        this.setState( {default: style } );
      }
    });
    console.log(this.state.eachStyle.default);
  }

  render() {
    if (this.state.eachStyle === null) {
      return <div className="productDetail">Loading...</div>;
    }
    return (
      <div></div>
    );
  }
}

export default Styles;