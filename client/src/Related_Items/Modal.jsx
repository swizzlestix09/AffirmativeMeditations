import React from 'react';

const Modal = (props) => {
  const {closeModal, productFeatures} = props;

  const closeicon = () => (
    <p
      className='close-modal'
      onClick={closeModal}
      style={
        {color: '#000000'}
      }>x</p>
  );

  let eitherProductChars = {};
  for (let featureObj of props.productFeatures) {
    eitherProductChars[featureObj.feature] = [featureObj.value];
  }
  for (let feature2Obj of props.product2Features) {
    if (eitherProductChars[feature2Obj.feature]) {
      eitherProductChars[feature2Obj.feature].push(feature2Obj.value);
    } else {
      eitherProductChars[feature2Obj.feature] = [null, feature2Obj.value];
    }
  }

  return (
    <div className='modal'>
      <div className ='content'>
        {closeicon()}
        <table className='comparison-table'>
          <tr>
            {/* TODO: drill down product names props to replace current/related product column titles */}
            <th>Current Product</th>
            <th>Characteristic</th>
            <th>Related Product</th>
          </tr>
          <tbody>
            {
              Object.keys(eitherProductChars).map((char) => {
                return (
                  <tr>
                    <td>{eitherProductChars[char][0] || 'null'}</td>
                    <td>{char}</td>
                    <td>{eitherProductChars[char][1] || 'null'}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Modal;