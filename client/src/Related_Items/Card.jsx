import React from 'react';

function Card(props) {
  return (
    <>
    {console.log(props)}
      {props.props.name}<br></br>
      {props.props.category}<br></br>
      ${props.props.default_price}<br></br>
    </>
  )
}

export default Card;