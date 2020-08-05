import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './style.css';
import './css/all.css';

import Header from './components/header';
import QuestionBlock from './components/questionBlock';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <QuestionBlock />
            </div>
        );
    }
} 

const AppWithHot = hot(module)(App);

let mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot name="zheny"/>, mountNode);
