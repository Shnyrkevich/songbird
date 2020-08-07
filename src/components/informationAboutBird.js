import React from 'react';
import { birdDescriptionBlock } from '../constants/constants';
import birdDate from '../constants/bidrds';

export default class InformationAboutBird extends React.Component {
    constructor(props) {
        super(props);
    
    }

    render() {
        const {activeBirdStatus, activeList, birdIndex} = this.props;

        //Доделать блок с изображением птицы,
        //Разработать логику игры
        //Добавить окошко конца игры

        return (
            <div className="bird-box">
                <p className="bird-box_default-text">{birdDescriptionBlock.defaultText}</p>
                <div className="bird-information">
                    <div>
                        <img src="" />
                    </div>
                    <p className="bird-information_name">{birdDate[activeList][birdIndex].name}</p>
                </div>
            </div>
        );
    }
}