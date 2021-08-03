import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from '../ImageInfo/ImageGallery'
class StyleSelector extends React.Component {

    state = {
      stylesArr: this.props.styles
    };


  render() {
    console.log(this.state.stylesArr)
    return (
      <div className="styleSelect">
        {this.state.stylesArr.map( (style, index) => {
          if (style['default?'] === true) {
            return (
              <>
                <span key="styleName" className="activeStyle">{style.name}</span>
                <span key={index.toString()} className="styleColor" style={{backgroundColor: style.name } } />
                <ImageGallery photos={style.photos} />
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