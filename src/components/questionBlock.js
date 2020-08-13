import React from 'react';
import { questionBlockContent } from '../constants/constants';
import birdsData from '../data/bidrds';
import AudioPlayer from '../components/audioPlayer';
import defaultBird from '../assets/images/random-bird.jpg';

export default class QuestionBlock extends React.Component {
    render() {
        const {clickStatus, activeList, correctBirdIndex} = this.props;
        console.log('Correct answer: ', birdsData[activeList][correctBirdIndex].name);

        return (
            <div className="question-block">
                <div className="question-block_image-block">
                    <img src={clickStatus ? birdsData[activeList][correctBirdIndex].image : defaultBird} className="random-bird"/>     
                </div>
                <div className="question-block_description">
                    <p className="question-block-bird-name">{clickStatus ? birdsData[activeList][correctBirdIndex].name : questionBlockContent.misteryText}</p>
                    <AudioPlayer
                        audio={birdsData[activeList][correctBirdIndex].audio}
                        stopAudio={clickStatus}
                    />
                </div>      
            </div>
        );
    }
}