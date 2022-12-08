import React from 'react';
import './App.css';
import Drum from './drum.js';
import { connect } from 'react-redux';
import { turnOn, turnOff } from './app/actions';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Drum power={this.props.power} turnOn={this.props.turnOn} turnOff={this.props.turnOff} />
      </div>
    );
  }
}

const matchStateToProps = (state) => {
  return {
    power: state.power,
  };
}

const matchDispatchToProps = (dispatch) => {
  return {
    turnOn: () => dispatch(turnOn()),
    turnOff: () => dispatch(turnOff()),
  };
}

export default connect(matchStateToProps, matchDispatchToProps)(App);
