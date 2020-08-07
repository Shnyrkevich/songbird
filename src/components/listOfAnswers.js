import React from 'react';
import birdsData from '../constants/bidrds';

export default class ListOfAnswers extends React.Component{
    constructor(props) {
        super(props);

        this.actionOnListItem = this.actionOnListItem.bind(this);
    }

    actionOnListItem(event) {
        this.props.acionOnrListComponent(event.target);
    }

    render() {
        return (
            <ul className='answers-list'>
                {
                    birdsData[this.props.activeList].map((el) => (
                        <li
                            className={el.id === this.props.correctBirdIndex + 1 ? 'answers-list_component correct-bird' : 'answers-list_component'}
                            key={el.id.toString()}
                            onClick={this.actionOnListItem}
                            value={el.id}
                        >
                            {el.name}
                        </li>
                    ))
                }
            </ul>
        );
    }
}