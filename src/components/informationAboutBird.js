import React from 'react';
import { birdDescriptionBlock } from '../constants/constants';
import birdDate from '../constants/bidrds';
import AudioPlayer from './audioPlayer';

export default class InformationAboutBird extends React.Component {
    render() {
        const {activeBirdStatus, activeList, birdIndex, clickStatus} = this.props;

        const defaultTextStyle = {
            display: !activeBirdStatus ? 'block' : 'none',
        }

        const birdInformationStyle = {
            display: activeBirdStatus ? 'flex' : 'none',
        }

        return (
            <div className="bird-box">
                <p className="bird-box_default-text" style={defaultTextStyle}>{birdDescriptionBlock.defaultText}</p>
                <div className="bird-information" style={birdInformationStyle}>
                    <div className="question-block_image-block">
                        <img src={birdDate[activeList][birdIndex - 1].image} className="random-bird" />
                    </div>
                    <div className="bird-information_container">
                        <p className="bird-information_container-name">{birdDate[activeList][birdIndex - 1].name}</p>
                        <p className="bird-information_container-species">{birdDate[activeList][birdIndex - 1].species}</p>
                        <AudioPlayer
                            audio={birdDate[activeList][birdIndex - 1].audio}
                            stopAudio={clickStatus}
                        />
                    </div>
                    <p className="bird-information_full-description">{birdDate[activeList][birdIndex - 1].description}</p>
                </div>
            </div>
        );
    }
}