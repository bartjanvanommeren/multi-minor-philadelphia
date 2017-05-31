import React, {Component} from 'react';

import DoorAudio from './DoorAudio';
import doorImage from './deur2.svg';
import './index.css';

class Door extends Component {

    render() {
        const title = this.props.title;
        const imagePath = this.props.imagePath;
        const audioPath = this.props.imagePath;

        return (
            <div className="door">
                <div className="door-title">
                    <h1>{title}</h1>
                </div>
                <DoorAudio/>
                <div className="doorImg"><img src={doorImage} alt="door"
                     onClick={this.props.goToRoom}/></div>
            </div>
        );
    }

}

export default Door;
