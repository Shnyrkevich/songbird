import React from 'react';
import { questionBlockContent } from '../constants/constants';

const BirdImage = ({srcWay}) => (
    <div className="question-block_image-block">
        <img src={`${srcWay}`} className="random-bird"/>     
    </div>
);

export default class QuestionBlock extends React.Component {
    constructor() {
        super();

        this.state = {
            status: false,
        }
    }

    render() {
        let imageWay = !this.state.status ? '../images/random-bird.jpg' : '';
        return (
            <div className="question-block">
                <BirdImage srcWay={imageWay}/>
            </div>
        );
    }
}