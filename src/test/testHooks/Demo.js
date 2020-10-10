import React, { Component } from 'react';
 class Demo extends Component {
   constructor(props) {
     super(props);
     this.state = { 
       count:0
      }
   }
   componentDidMount(){
     console.log(`you click ${this.state.count}`)
   }
   componentDidUpdate(){
    console.log(`you click ${this.state.count}`)
   }
   addCount(){
     this.setState({
       count:this.state.count+1
     })
   }
   render() { 
     return ( 
        <div>
          <p>you clicked {this.state.count} times</p>
          <button onClick={this.addCount.bind(this)}>Click me</button>
        </div>
      );
   }
 }
  
 export default Demo;