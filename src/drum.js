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
    }
    handleClick(e) {
        console.log('click');
        this.props.power ? e.target.children[0].play() : console.log('power off');
    }
    render() {
        return (
        <div id="drum-machine">
            <div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad'>
                        <audio src={heater1} />Q
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad'>
                        <audio src={heater2} />W
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad'>
                        <audio src={heater3} />E
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad'>
                        <audio src={heater4} />A
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad'>
                        <audio src={clap} />S
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad'>
                        <audio src={openhat} />D
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad'>
                        <audio src={kicknhat} />Z
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad'>
                        <audio src={kick} />X
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} className='drum-pad'>
                        <audio src={closedhat} />C
                    </button>
                </div>
            </div>
            <div>
                <div></div>
                <div id="display"></div>
                <div></div>
            </div>
        </div>
        );
    }
}

export default Drum;