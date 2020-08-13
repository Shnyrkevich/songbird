import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './style.css';
import './css/all.css';

import Header from './components/header';
import QuestionBlock from './components/questionBlock';
import ListOfAnswers from './components/listOfAnswers';
import InformationAboutBird from './components/informationAboutBird';
import GameEndBlock from './components/gameEndBlock';

import {
    nextLvlButton,
    appConstants,
    headerContent
} from './constants/constants';
import winSound from './assets/audio/correct.mp3';
import loseSound from './assets/audio/fail.mp3';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clickOnBird: false,
            activeBirdIndex: 1,
            score: 0,
            correctAnswer: false,
            birdIndex: 0,
            activeList: 0,
            finePoint: 0,
            gameEnd: false,
        };

        this.nextLvlButtonClick = this.nextLvlButtonClick.bind(this);
        this.actionOnListOfAnswers = this.actionOnListOfAnswers.bind(this);
        this.repeatButtonAction = this.repeatButtonAction.bind(this);
    }

    componentDidMount() {
        this.setState({
            birdIndex: this.randomBirdIndex(),
        });
    }

    randomBirdIndex() {
        return Math.floor(Math.random() * appConstants.birdsInOneBox);
    }

    nextLvlButtonClick() {
        if (!this.state.correctAnswer) {
            return;
        }
        if (this.state.activeList === headerContent.navigationNames.length - 1) {
            this.setState(
                {
                    gameEnd: true,
                    activeList: -1,
                }
            );
        }
        
        this.setState((prevState) => ({
            clickOnBird: false,
            correctAnswer: false,
            birdIndex: this.randomBirdIndex(),
            activeList: prevState.activeList + 1,
            finePoint: 0,
        }));
        this.removeListComponentActiveStyles();
    }

    removeListComponentActiveStyles() {
        const masOfLinks = document.querySelectorAll('.answers-list_component');
        masOfLinks.forEach((el) => {
            el.classList.remove('correct-answer');
            el.classList.remove('incorrect-answer');
        });
    }

    actionOnListOfAnswers(bird) {
        this.setState({
            clickOnBird: true,
            activeBirdIndex: bird.value,
        });

        const status = bird.classList.contains('correct-bird') ? true : false;
        
        if (!bird.classList.contains('correct-answer') || !bird.classList.contains('incorrect-answer')) {
            this.audioEffect(status);
        }

        if (bird.value - 1 === this.state.birdIndex && !this.state.correctAnswer) {
            bird.classList.add('correct-answer');
            this.setState((prevState) => ({
                correctAnswer: true,
                score: prevState.score + appConstants.hightestScoreForLvl + prevState.finePoint,
            }));
        } else if (bird.value - 1 !== this.state.birdIndex && !this.state.correctAnswer) {
            bird.classList.add('incorrect-answer');
            this.setState((prevState) => ({
                finePoint: prevState.finePoint - 1,
            }));
        }
    }

    repeatButtonAction() {
        this.setState({
            gameEnd: false,
            score: 0,
        });
    }

    audioEffect(status) {
        const successAudio = document.querySelector('.correct-sound');
        const failAudio = document.querySelector('.incorrect-sound');
        const questionAudio = document.querySelector('.audio_question-block');
        if (status) {
            questionAudio.currentTime = 0;
            questionAudio.pause();
            successAudio.currentTime = 0;
            successAudio.play();
        } else {
            failAudio.currentTime = 0;
            failAudio.play();
        }
    }

    render() {
        const {gameEnd, activeList, score, birdIndex, correctAnswer, clickOnBird, activeBirdIndex} = this.state;
        
        if (!gameEnd) {
            return (
                <div className="wrapper">
                    <Header
                        activeList={activeList}
                        counter={score}
                    />
                    <QuestionBlock 
                        correctBirdIndex={birdIndex}
                        activeList={activeList}
                        clickStatus={correctAnswer}
                    />
                    <div className="game-container">
                        <ListOfAnswers 
                            correctBirdIndex={birdIndex}
                            activeList={activeList}
                            acionOnrListComponent={this.actionOnListOfAnswers}
                        />
                        <InformationAboutBird
                            activeBirdStatus={clickOnBird}
                            activeList={activeList}
                            birdIndex={activeBirdIndex}
                            clickStatus={correctAnswer}
                        />
                        <button
                            className={!this.state.correctAnswer ? 'next-lvl-button disactive' : 'next-lvl-button active'}
                            onClick={this.nextLvlButtonClick}
                        >
                            {nextLvlButton.name}
                        </button>
                    </div>
                    <audio src={winSound} className='correct-sound'></audio>
                    <audio src={loseSound} className='incorrect-sound'></audio>
                </div>
            );   
        } else {
            return (
                <div className="wrapper">
                    <Header
                        activeList={activeList}
                        counter={score}
                    />
                    <GameEndBlock score={score} onRepeatButton={this.repeatButtonAction} />
                </div>
            );
        }
    }
} 

const AppWithHot = hot(module)(App);

let mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot name="zheny"/>, mountNode);
