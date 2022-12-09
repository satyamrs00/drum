import React from 'react';
import './App.css';
import Drum from './drum.js';
import { connect } from 'react-redux';
import { togglePower, changeVolumeTo, updateDisplay, toggleBank } from './app/actions';
import "bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {
  render() {
    return (
      <div id='app' className="d-flex justify-content-center align-items-center container-fluid">
        <Drum power={this.props.power} togglePower={this.props.togglePower}
        volume={this.props.volume} changeVolumeTo={this.props.changeVolumeTo} 
        display={this.props.display} updateDisplay={this.props.updateDisplay}
        bank={this.props.bank} toggleBank={this.props.toggleBank} />
      </div>
    );
  }
}

const matchStateToProps = (state) => {
  return {
    power: state.power,
    volume: state.volume,
    display: state.display,
    bank: state.bank,
  };
}

const matchDispatchToProps = (dispatch) => {
  return {
    togglePower: () => dispatch(togglePower()),
    changeVolumeTo: (amount) => dispatch(changeVolumeTo(amount)),
    updateDisplay: (text) => dispatch(updateDisplay(text)),
    toggleBank: () => dispatch(toggleBank()),
  };
}

export default connect(matchStateToProps, matchDispatchToProps)(App);
