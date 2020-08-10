import React from 'react';
import {audioConstants} from '../constants/constants';

export default class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.playButtonAction = this.playButtonAction.bind(this);
        this.sliderChange = this.sliderChange.bind(this);

        this.state = {
            startTime: audioConstants.zeroTime,
            endTime: audioConstants.zeroTime,
            sliderValue: 0,
            iconState: audioConstants.iconStart,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.audio !== prevProps.audio) {
            clearInterval(this.tinterval);
            this.setState({
                startTime: audioConstants.zeroTime,
                endTime: audioConstants.zeroTime,
                sliderValue: 0,
                iconState: audioConstants.iconStart,
            });
        }
    }

    converTime(sec) {
        let minutes = Math.floor(sec / 60);
        let seconds = sec % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return minutes + ':' + seconds;
    }

    sliderChange(time) {
        this.setState({sliderValue: time});
    }

    playButtonAction(event) {
        const durationTime = Math.round(this.refs.player.duration);
        this.refs.slider.max = durationTime;
        this.setState({endTime: this.converTime(durationTime)});

        if (event.target.classList.contains('fa-play')) {
            this.refs.player.play();
            this.setState({iconState: audioConstants.iconPause});
            this.tinterval = setInterval(() => {this.changeSliderAndCurrentTime();}, 1000);
        } else {
            this.refs.player.pause();
            this.setState({iconState: audioConstants.iconStart});
            clearInterval(this.tinterval);
        }
    }

    changeSliderAndCurrentTime() {
        let curTime = Math.round(this.refs.player.currentTime);
        this.sliderChange(curTime);
        if (this.refs.player.ended) {
            curTime = audioConstants.zeroTime;
            this.sliderChange(0);
            this.setState({iconState: audioConstants.iconStart});
        } else {
            curTime = this.converTime(curTime);
        }
        this.setState({startTime: curTime});
    }

    render() {
        return (
            <div className="audio">
                <audio ref="player" className="audio_question-block" src={this.props.audio}></audio>
                <div className="audio-button" onClick={this.playButtonAction}>
                    <i className={`fas fa-${this.state.iconState}`}></i>
                </div>
                <div className="audio-slider">
                    <input ref="slider" type="range" className="audio-slider_liner" min="0" step="1" value={this.state.sliderValue} onChange={this.sliderChange}/>
                    <div className="audio-slider_times">
                        <div className="stat-time">{this.state.startTime}</div>
                        <div className="end-time">{this.state.endTime}</div>
                    </div>
                </div>
            </div>
        );
    }
}