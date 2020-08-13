import React from 'react';
import {headerContent} from '../constants/constants';
import logoImg from '../assets/images/SongBird.png';

export default class Header extends React.Component {
    componentDidUpdate() {
        const masOfLinks = document.querySelectorAll('.navigation-link');
        masOfLinks.forEach((el) => el.classList.remove('active-link'));
        masOfLinks[this.props.activeList].classList.add('active-link');
    }

    render() {
        return (
            <header className="header">
                <div className="header_information">
                    <div className="header_information-logo">
                        <img src={logoImg} className="header_information-image"/>
                    </div>
                    <div className="header_information-score">{`${headerContent.scroe} : ${this.props.counter}`}</div>
                </div>
                <ul className="header_navigation">
                    {
                        headerContent.navigationNames.map((el, index) => <li key={index} className="navigation-link">{el}</li>)
                    }
                </ul>
            </header>
        );
    }
}
