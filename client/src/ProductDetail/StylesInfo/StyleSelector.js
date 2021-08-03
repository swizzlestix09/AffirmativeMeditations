import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './ProductDetail';
import Carosel from './Carosel';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stylesArr: []
    };
  }

  render() {
    return (
      <div className="styleSelect">
        {this.props.styles.map( (style, index) => {
          if (style['default?'] === true) {

            return (
              <>
                <span key="styleName" className="activeStyle">{style.name}</span>
                <span key={index.toString()} className="styleColor" style={{backgroundColor: style.name } } />
              </>
            );
          }
          return (
            <span key={index.toString()} className="styleColor" style={ {backgroundColor: style.name } } onClick={()=> console.log(style.photos) } />
          );
        })}
      </div>
    );
  }
}

export default StyleSelector;