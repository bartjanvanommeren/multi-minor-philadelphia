import React, {Component} from 'react';

import audioImage from './buttons-audio.svg';
import './index.css';

class Audio extends Component {
    componentDidUpdate() {
        if (this.props.autoPlay) {
            this.playAudio();
        }
    };

    playAudio = () => {
        const audioPlayer = document.getElementById('audio-player');
        const source = document.getElementById('wav-source');

        source.src = this.props.audioPath;

        audioPlayer.load();
        audioPlayer.play();
    };

    render() {
        return (
            <div className="help-audio"
                 onClick={this.playAudio.bind(this)}>
                <img src={audioImage}
                     className="button"
                     alt="audio button"/>
            </div>
        );
    }

}

export default Audio;
