import React from 'react';
import {headerContent} from '../constants/constants';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    navigation() {
        return headerContent.navigationNames.map((el, index) => <li key={index} className="navigation-link">{el}</li>);
    }

    render() {
        return (
            <div className="header">
                <div className="header_information">
                    <div className="header_information-logo">{headerContent.logo}</div>
                    <div className="header_information-score">{`${headerContent.scroe} : ${this.state.counter}`}</div>
                </div>
                <ul className="header_navigation">{this.navigation()}</ul>
            </div>
        );
    }
}
