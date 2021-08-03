import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './ProductDetail';

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
        {this.props.styles.map(style => {
          if (style['default?'] === true) {
            return ( <span key="styleName" className="activeStyle">{style.name}</span>);
          }
          return (
            <span key={style.name.toString()} className="styleColor" style={{backgroundColor: style.name } } />
          );
        })}
      </div>
    );
  }
}

export default StyleSelector;