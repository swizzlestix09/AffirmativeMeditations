import React from 'react';
import ReactDOM from 'react-dom';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import Carosel from '../ImageInfo/Carosel';
import Price from './Price';

const StyleSelector = (props) => {

  return (
    <div className="stylesParent">
      <span>{props.name}</span>
      <Price prices={props.prices} />
      { props.products.results.map( (style, index) => {
        if (style.name === props.name) {
          return (

            <div key={index} className="thumbs">
              <IoIosCheckmarkCircleOutline />
              <img className="thumbs stylesselect" key={index} src={style.photos[0].thumbnail_url} onClick={ ()=>{ props.setStyle(style); } } />
            </div>
          );
        }
        return (
          <div key={index} className="thumbs">
            <img className="thumbs stylesselect" key={index} src={style.photos[0].thumbnail_url} onClick={ ()=>{ props.setStyle(style); } } />
          </div>
        );
      })
      }
    </div>
  );
};

export default StyleSelector;




// const StyleSelector = (props) => {

//   return (
//     <div className="stylesParent">
//       <span>{props.name}</span>
//       <Price prices={props.prices} />
//       { props.products.results.map( (style, index) => {
//         return (
//           style.name === props.name ?
//             <div key={index} className="stylesThumbs" >
//               <IoIosCheckmarkCircleOutline />
//               <img className="thumbs stylesselect"
//                 onClick={ ()=>{ props.setStyle(style); } } />
//             </div>
//             :
//             <div key={index} className="stylesThumbs" >
//               <img
//                 className="thumbs stylesselect"
//                 key={index}
//                 src={style.photos[0].thumbnail_url}
//                 onClick={ ()=>{ props.setStyle(style); } } />
//             </div>
//         );
//       })
//       }
//     </div>
//   );
// };