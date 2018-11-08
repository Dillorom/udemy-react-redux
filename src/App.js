import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {
  state = {
    username: "Dillorom"
  }

  onClickHandler = () => {
    this.setState({
      username: "Iymona"
    })
  }
  onChangeHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  render() {
    const style = {
      backgroundColor: "white",
      border: "2px solid gray",
      padding: "8px ",
      cursor: 'pointer',
      margin: '5px'
    }
    return (
      <div className="App">
      <UserInput change={this.onChangeHandler}/>
      <UserOutput username={this.state.username}/>
      <UserOutput click={this.onClickHandler}>Click above line to switch the name</UserOutput>
      <button style={style} onClick={this.onClickHandler}>Click</button>
       
      </div>
    );
  }
}

export default App;
