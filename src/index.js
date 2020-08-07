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

import {nextLvlButton, appConstants} from './constants/constants';
import winSound from './assets/audio/correct.mp3';
import loseSound from './assets/audio/fail.mp3';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clickOnBird: false,
            activeBirdIndex: 0,
            score: 0,
            correctAnswer: false,
            birdIndex: 0,
            activeList: 0,
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

    nextLvlButtonClick(key) {
        this.setState((prevState) => ({
            score: prevState.score + 1,
            correctAnswer: true,
        }));
    }

    actionOnListOfAnswers(bird) {
        this.setState({
            clickOnBird: true,
            activeBirdIndex: bird.value,
        });
        console.log(bird.value);
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
