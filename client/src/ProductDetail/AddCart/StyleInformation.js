import React from 'react';
import ReactDOM from 'react-dom';

class StyleInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('cart lyfe ', this.props);
    return (
      <div>CARTS LYFE</div>
    );
  }
}

export default StyleInformation;