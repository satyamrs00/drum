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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

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
        e.target.style.backgroundColor = '#ffa500';
        e.target.style.boxShadow = '1px 1px 2px #000000';
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.backgroundColor = '#808080';
            e.target.style.boxShadow = '3px 3px 5px #000000';
            e.target.style.transform = 'scale(1)';
        }, 100);

        if (this.props.power){ e.target.children[0].play(); this.props.updateDisplay(e.target.dataset.audio) }
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
        <div id="drum-machine" className="row p-4">
            <span id="fcc" className="text-end">
                FCC&nbsp;
                <FontAwesomeIcon icon={faFreeCodeCamp} />
            </span>
            <div className="col-12 col-md-7 row row-cols-3 g-2" id="pads">
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
            <div className="col-12 col-md-5 p-3 ps-md-5 d-flex flex-column justify-content-evenly align-items-center">
                <div className="my-3 form-check form-switch d-flex flex-column align-items-center text-center p-0 w-100">
                    <div className="power-label w-100">Power</div>
                    <div className="switch">
                        <button className="switch-thumb" style={{float: this.props.power ? "right": "left"}}
                        onClick={this.props.power ? this.props.turnOff : this.props.turnOn} />
                    </div>
                </div>
                <div id="display" className="row align-items-center justify-content-center my-2">&nbsp;{this.props.display}&nbsp;</div>
                <div className="w-100 my-2">
                    <input type="range" min="0" max="100" id="volume" onChange={this.handleVolume} value={this.props.volume * 100} />
                </div>
            </div>
        </div>
        );
    }
}

export default Drum;