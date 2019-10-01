import React, { Component } from 'react'

export class Action extends Component {
    render() {

        let start = (this.props.timerState !== 'running')
            ? <button className="start" onClick={this.props.start}>Start <i className="fas fa-play"></i></button>
            : <button className="start" disabled>Start <i className="fas fa-play"></i></button>;

        let lap = (this.props.timerState === 'running')
            ? <button className="lap" onClick={this.props.lap}>Lap <i className="far fa-clipboard"></i></button>
            : <button className="lap" disabled>Lap <i className="far fa-clipboard"></i></button>

        let pause = (this.props.timerState === 'running')
            ? <button className="pause" onClick={this.props.pause}>Pause <i className="fas fa-pause"></i></button>
            : <button className="pause" disabled>Pause <i className="fas fa-pause"></i></button>

        let stop = (this.props.timerState !== 'stopped')
            ? <button className="stop" onClick={this.props.stop}>Stop <i className="fas fa-stop"></i></button>
            : <button className="stop" disabled>Stop <i className="fas fa-stop"></i></button>
        return (
            <div>
                {start}
                {lap}
                {pause}
                {stop}
            </div>
        )
    }
}

export default Action
