import React from 'react';
import './App.css';
import Drum from './drum.js';
import { connect } from 'react-redux';
import { turnOn, turnOff, changeVolumeTo, updateDisplay } from './app/actions';
import "bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {
  render() {
    return (
      <div id='app' className="d-flex justify-content-center align-items-center container-fluid">
        <Drum power={this.props.power} turnOn={this.props.turnOn} turnOff={this.props.turnOff} 
        volume={this.props.volume} changeVolumeTo={this.props.changeVolumeTo} 
        display={this.props.display} updateDisplay={this.props.updateDisplay} />
      </div>
    );
  }
}

const matchStateToProps = (state) => {
  return {
    power: state.power,
    volume: state.volume,
    display: state.display,
  };
}

const matchDispatchToProps = (dispatch) => {
  return {
    turnOn: () => dispatch(turnOn()),
    turnOff: () => dispatch(turnOff()),
    changeVolumeTo: (amount) => dispatch(changeVolumeTo(amount)),
    updateDisplay: (text) => dispatch(updateDisplay(text)),
  };
}

export default connect(matchStateToProps, matchDispatchToProps)(App);
