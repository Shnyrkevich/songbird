import React from 'react';
import { gameEndBlock, questionBlockContent } from '../constants/constants';

export default class GameEndBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.score === gameEndBlock.hightScore) {
            return (
                <div className="game-end-block">
                    <p className="game-end-block_congrat">{gameEndBlock.winCongratulations}</p>
                    <div className='game-end-block_image-container'>
                        <img src={questionBlockContent.defaultImageWay} className='game-end-block_image' />
                    </div>
                    <p className="game-end-block_score-information">{gameEndBlock.winInformation}</p>
                    <p className="game-end-block_score-information">{gameEndBlock.winJoke}</p>
                </div>
            );
        } else {
            return (
                <div className="game-end-block">
                    <p className="game-end-block_congrat">{gameEndBlock.congratulations}</p>
                    <p className="game-end-block_score-information">{gameEndBlock.scoreInformation(this.props.score)}</p>
                    <button 
                        className="game-end-block_repeat-button"
                        onClick={this.props.onRepeatButton}
                    >
                        {gameEndBlock.repeatButtonName}
                    </button>
                </div>
            );
        }
    }
}