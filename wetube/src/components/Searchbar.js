import React, { Component } from 'react';

class Searchbar extends Component {

constructor(props){
  super(props);

  this.state = {term: ""};

}
  render() {
    return (
      <input
      value = {this.state.term}
      onChange = {event => this.setState({term: event.target.value})}/>
    );
  }
  /** this code has been refactorised in line 6, it displays the events changing in the input field
   onInputChange(event){
   console.log(event.target.value);
   }
   */
}

export default Searchbar;
