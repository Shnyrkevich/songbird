import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import 'core-js/stable';
import 'regenerator-runtime/runtime'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    toggleActive = () => {
        this.setState(prevState => ({ active: !prevState.active }));
    }

    render() {
        const { name } = this.props;
        const { active } = this.state;

        return (
            <div>
                <button type="button" onClick={this.toggleActive}>
                    Hello {name}! Press to toggle image
                </button>
                <div>{active ? "Lol" : "Kek"}</div>
            </div>
        );
    }
}

const AppWithHot = hot(module)(App);

let mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot name="zheny"/>, mountNode);
