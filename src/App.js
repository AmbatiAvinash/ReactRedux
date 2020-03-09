import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     username : 'Avinash',
  //     age : 25
  //   }
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

        <div>Age: <span> {this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age Up </button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
      age: state.age
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
      onAgeUp: () => dispatch({type: 'ADD'}),
      onAgeDown: () => dispatch({type: 'SUBTRACT'})
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
