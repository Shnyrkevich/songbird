import React from 'react';
import { questionBlockContent } from '../constants/constants';
import birdsData from '../constants/bidrds';
import AudioPlayer from '../components/audioPlayer';

export default class QuestionBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageWay: questionBlockContent.defaultImageWay,
            birdTitle: questionBlockContent.misteryText,
        }
    }

    render() {
        return (
            <div className="question-block">
                <div className="question-block_image-block">
                    <img src={this.props.clickStatus ? birdsData[this.props.activeList][this.props.correctBirdIndex].image : this.state.imageWay} className="random-bird"/>     
                </div>
                <div className="question-block_description">
                    <p className="question-block-bird-name">{this.props.clickStatus ? birdsData[this.props.activeList][this.props.correctBirdIndex].name : this.state.birdTitle}</p>
                    <AudioPlayer audio={birdsData[this.props.activeList][this.props.correctBirdIndex].audio} />
                </div>      
            </div>
        );
    }
}