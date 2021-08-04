import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from '../ImageInfo/ImageGallery';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import Carosel from '../ImageInfo/Carosel';
import StyleInformation from '../AddCart/StyleInformation';


class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stylesArr: this.props.styles,
      selectedStyle: null,
      styleInfo: null
    };
    this.setSelectedStyle = this.setSelectedStyle.bind(this);
  }

  setSelectedStyle(array) {
    this.setState({ selectedStyle: array }, ()=>{
      console.log('mmmmm? ', this.state.selectedStyle);
    });
  }

  render() {
    //console.log('styleSelector ', this.props); useEffect
    return (
      <div>
        <Carosel allImages={this.state.selectedStyle !== null ? this.state.selectedStyle : this.props.default.photos} />
        <StyleInformation styleInfo={this.state.styleInfo !== null ? this.state.styleInfo : this.props.default} />
        <div>
          { this.props.styles.map( (style, index) => {
            return (
              <div className="cropSelectImg">
                <img src={style.photos[0].thumbnail_url} onClick={ ()=>{ this.setSelectedStyle(style); } } />
              </div>
            );
          })
          }
        </div>
      </div>
    );
  }
}

export default StyleSelector;

// if (style['default?'] === true) {
//   return (
//     <div className="cropSelectImg">
//       <img key={index.toString()} className="style" src={style.photos[0].thumbnail_url} value={index} />
//     </div>
//   );
// }
// return (
//   <div className="cropSelectImg">
//     <img key={index.toString()} className="style" src={style.photos[0].thumbnail_url} value={index} />
//   </div>
// );
// })
