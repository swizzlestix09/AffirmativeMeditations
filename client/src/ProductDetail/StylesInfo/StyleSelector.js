import React from 'react';
import ReactDOM from 'react-dom';

const StyleSelector = (props) => {
  console.log(props);
  return (
    <div className="styleSelect">
      {this.props.styles.map((style, index) => {
        if (style['default?'] === true) {
          return (
            <>
              <span key="styleName" className="activeStyle">
                {style.name}
              </span>
              <span
                key={index.toString()}
                className="styleColor"
                style={{ backgroundColor: style.name }}
              />
            </>
          );
        }
        return (
          <span
            key={index.toString()}
            className="styleColor"
            style={{ backgroundColor: style.name }}
            onClick={() => console.log(style.photos)}
          />
        );
      })}
    </div>
  );
};

export default StyleSelector;
