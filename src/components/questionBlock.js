import React from 'react';
import { questionBlockContent } from '../constants/constants';
import birdsData from '../constants/bidrds';
import AudioPlayer from '../components/audioPlayer';

export default class QuestionBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {clickStatus, activeList, correctBirdIndex} = this.props;
        
        return (
            <div className="question-block">
                <div className="question-block_image-block">
                    <img src={clickStatus ? birdsData[activeList][correctBirdIndex].image : questionBlockContent.defaultImageWay} className="random-bird"/>     
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