import React, { Component } from 'react';


class App extends Component {
  state = {
    count:0
  };
  increment = () =>{
  this.setState ({
    count: this.state.count +1
  });
};
   componentDidMount ( ) {
     document.title =`clicked ${this.state.count} times`
   }
  componentDidUpdate ( ) {
    document.title =`clicked ${this.state.count} times`
  }
  render () {
    return (
      <div>
        <h2>Counter APP with updated title feature</h2>
        <p>using lifecycle method</p>
        <button id="buttons" onClick ={this.increment}> clicked {this.state.count} times and updates title tab</button>
    </div>
    );
  }

  }
export default App;
