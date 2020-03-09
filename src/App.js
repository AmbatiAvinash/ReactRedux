import React, { Component } from 'react';
import './App.css';

import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username : 'Avinash',
      age : 25
    }
  }

//   nameChangeHandler = (e) => {
//     this.setState({
//         username: e.target.value
//     })
// }

// ageUp = () => {
//   this.setState({
//     age: ++this.state.age
//   })
// }

// ageDown = () => {
//   this.setState({
//     age: --this.state.age
//   })
// }

  render(){
    return (
      <div className="App">
        {/* <UserInput 
          changeName = {this.nameChangeHandler}
          name = {this.state.username}
          age={this.state.age}
        />
        <UserOutput name = {this.state.username}/> */}

        <div>Age: <span> {this.state.age}</span></div>
        <button onClick={this.ageUp}>Age Up </button>
        <button onClick={this.ageDown}>Age Down</button>
      </div>
    );
  }
}

export default App;
