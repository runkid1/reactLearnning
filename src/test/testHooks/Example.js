import React, { Component } from 'react';


class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count:0
     }
  }
  render() { 
    return (
      <div>
        <p>you clicked {this.state.count}</p>
        <button onClick={this.addCount.bind(this)}>clicked me</button>
      </div>
      );
  }
  addCount(){
    this.setState({
      count:this.state.count+1
    })
  }
}
 
export default Example;