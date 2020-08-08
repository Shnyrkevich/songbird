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
        
        if (bird.value - 1 === this.state.birdIndex && !this.state.correctAnswer) {
            bird.classList.add('correct-answer');
            this.setState((prevState) => ({
                correctAnswer: true,
                score: prevState.score + appConstants.hightestScoreForLvl + prevState.finePoint,
            }));
            this.audioEffect(status);
        } else if (bird.value - 1 !== this.state.birdIndex && !this.state.correctAnswer) {
            bird.classList.add('incorrect-answer');
            this.setState((prevState) => ({
                finePoint: prevState.finePoint - 1,
            }));
            this.audioEffect(status);
        }
    }

    audioEffect(status) {
        const successAudio = document.querySelector('.correct-sound');
        const failAudio = document.querySelector('.incorrect-sound');
        if (status) {
            successAudio.currentTime = 0;
            successAudio.play();
        } else {
            failAudio.currentTime = 0;
            failAudio.play();
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Header
                    activeList={this.state.activeList}
                    counter={this.state.score}
                />
                <QuestionBlock 
                    correctBirdIndex={this.state.birdIndex}
                    activeList={this.state.activeList}
                    clickStatus={this.state.correctAnswer}
                />
                <div className="game-container">
                    <ListOfAnswers 
                        correctBirdIndex={this.state.birdIndex}
                        activeList={this.state.activeList}
                        acionOnrListComponent={this.actionOnListOfAnswers}
                    />
                    <InformationAboutBird
                        activeBirdStatus={this.state.clickOnBird}
                        activeList={this.state.activeList}
                        birdIndex={this.state.activeBirdIndex}
                    />
                    <button className='next-lvl-button' onClick={this.nextLvlButtonClick}>{nextLvlButton.name}</button>
                </div>
                <audio src={winSound} className='correct-sound'></audio>
                <audio src={loseSound} className='incorrect-sound'></audio>
            </div>
        );
    }
} 

const AppWithHot = hot(module)(App);

let mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot name="zheny"/>, mountNode);
