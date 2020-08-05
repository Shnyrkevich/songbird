import React from 'react';
import { questionBlockContent } from '../constants/constants';
import IncognitBirdImage from '../images/random-bird.jpg';
import birdsData from '../constants/bidrds';
import AudioPlayer from '../components/audioPlayer';

export default class QuestionBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: false,
            imageWay: IncognitBirdImage,
            birdTitle: questionBlockContent.misteryText,
            audioWay: birdsData[0][3].audio,
        }
    }

    render() {
        return (
            <div className="question-block">
                <div className="question-block_image-block">
                    <img src={IncognitBirdImage} className="random-bird"/>     
                </div>
                <div className="question-block_description">
                    <p className="question-block-bird-name">{this.state.birdTitle}</p>
                    <AudioPlayer audio={this.state.audioWay} />
                </div>      
            </div>
        );
    }
}