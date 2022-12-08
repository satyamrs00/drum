import { Component } from "react";
import './drum.css';
import heater1 from './audios/Heater-1.mp3';
import heater2 from './audios/Heater-2.mp3';
import heater3 from './audios/Heater-3.mp3';
import heater4 from './audios/Heater-4_1.mp3';
import clap from './audios/Heater-6.mp3';
import openhat from './audios/Dsc_Oh.mp3';
import kicknhat from './audios/Kick_n_Hat.mp3';
import kick from './audios/RP4_KICK_1.mp3';
import closedhat from './audios/Cev_H2.mp3';

class Drum extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.timeout = 0;
    }
    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            try {
                document.getElementById(e.key.toUpperCase()).parentElement.click();
                e.preventDefault();
            } catch (error) {}
        });
        document.querySelectorAll('audio').forEach(audio => {
            audio.volume = this.props.volume;
        });
    }
    handleClick(e) {
        clearTimeout(this.timeout);
        this.props.power ?  e.target.children[0].play() : console.log('power off');
        this.props.power ? this.props.updateDisplay(e.target.dataset.audio) : console.log('');
        this.timeout = setTimeout(() => {
            this.props.updateDisplay('');
        }, 1000)
    }
    handleVolume(e) {
        this.props.changeVolumeTo(e.target.value/100);
        document.querySelectorAll('audio').forEach(audio => {
            audio.volume = e.target.value/100;
        });

        this.props.updateDisplay('Volume: ' + e.target.value);
        setTimeout(() => {
            this.props.updateDisplay('');
        }, 1000)
    }
    render() {
        return (
        <div id="drum-machine">
            <div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad' data-audio="Heater 1">
                        <audio src={heater1} className="clip" id="Q" />Q
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad' data-audio="Heater 2">
                        <audio src={heater2} className="clip" id="W" />W
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad' data-audio="Heater 3">
                        <audio src={heater3} className="clip" id="E" />E
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad' data-audio="Heater 4">
                        <audio src={heater4} className="clip" id="A" />A
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad' data-audio="Clap">
                        <audio src={clap} className="clip" id="S" />S
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad' data-audio="Open HH">
                        <audio src={openhat} className="clip" id="D" />D
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad' data-audio="Kick n Hat">
                        <audio src={kicknhat} className="clip" id="Z" />Z
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad' data-audio="Kick">
                        <audio src={kick} className="clip" id="X" />X
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad' data-audio="Closed HH">
                        <audio src={closedhat} className="clip" id="C" />C
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <button onClick={this.props.power ? this.props.turnOff : this.props.turnOn} id="power">{this.props.power ? 'ON' : 'OFF'}</button>
                </div>
                <div id="display">{this.props.display}</div>
                <div>
                    <input type="range" min="0" max="100" id="volume" onChange={this.handleVolume} value={this.props.volume * 100} />
                </div>
            </div>
        </div>
        );
    }
}

export default Drum;