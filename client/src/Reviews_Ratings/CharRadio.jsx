import React from 'react';

class CharRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var integer = parseInt(event.target.value);
    this.setState({
      selected: integer
    }, ()=>{
      this.props.change(this.props.name, this.state.selected);
    });
  }

  render () {
    return (
      <div className={this.props.name + 'Container'}>
        <div className = {'title' + this.props.name} >{this.props.name}</div>
        <input type="radio" value = '1' onChange={this.handleChange} checked={this.state.selected === 1} />
        <input type="radio" value = '2' onChange={this.handleChange} checked={this.state.selected === 2} />
        <input type="radio" value = '3' onChange={this.handleChange} checked={this.state.selected === 3} />
        <input type="radio" value = '4' onChange={this.handleChange} checked={this.state.selected === 4} />
        <input type="radio" value = '5' onChange={this.handleChange} checked={this.state.selected === 5} />
      </div>
    );
  }

}




export default CharRadio;