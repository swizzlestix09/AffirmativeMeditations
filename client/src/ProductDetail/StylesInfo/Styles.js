import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import pat from './../../../../config';
import StyleSelector from './StyleSelector';

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eachStyle: null,
      defaultStyle: null
    };
    this.loadStyles = this.loadStyles.bind(this);
  }

  componentDidMount() {
    this.loadStyles();
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
      .then((res) => {
        this.setState( { eachStyle: res.data } );
      })
      .then(() => {
        this.state.eachStyle.results.forEach(style => {
          if (style['default?'] === true) {
            this.setState( {defaultStyle: style} );
          }
        });
      })
      .catch(() => {
        return <div> Something's Wrong</div>;
        console.log('err');
      });

  }

  render() {
    if (this.state.defaultStyle === null || this.state.eachStyle === null ) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <StyleSelector styles={this.state.eachStyle.results} default={this.state.defaultStyle}/>
      </div>
    );
  }
}

export default Styles;

// { this.state.selected === null ? <StyleSelector images={this.state.default.photos} /> : <ImageGallery images={this.state.selected.photos} />}