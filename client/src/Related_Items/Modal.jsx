import React from 'react';

const Modal = (props) => {
  const {closeModal} = props;

  const closeicon = () => (
    <p
    onClick={closeModal}
    style={
      {color: '#000000'}
    }>x</p>
  )

  return (
    <div className='modal'>
      <div className ='content'>
      {closeicon()}

      </div>
    </div>
  )
}

export default Modal;