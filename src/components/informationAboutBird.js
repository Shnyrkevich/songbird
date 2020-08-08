import React from 'react';
import { birdDescriptionBlock } from '../constants/constants';
import birdDate from '../constants/bidrds';
import AudioPlayer from './audioPlayer';

export default class InformationAboutBird extends React.Component {
    constructor(props) {
        super(props);
    
    }

    render() {
        const {activeBirdStatus, activeList, birdIndex} = this.props;

        const defaultTextStyle = {
            display: !activeBirdStatus ? 'block' : 'none',
        }

        const birdInformationStyle = {
            display: activeBirdStatus ? 'flex' : 'none',
        }
        //Доделать блок с изображением птицы, разобрать с индексом последней птицы
        //Разработать логику игры
        //Добавить окошко конца игры

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
                        <AudioPlayer audio={birdDate[activeList][birdIndex - 1].audio} />
                    </div>
                    <p className="bird-information_full-description">{birdDate[activeList][birdIndex - 1].description}</p>
                </div>
            </div>
        );
    }
}