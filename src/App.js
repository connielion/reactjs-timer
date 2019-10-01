
import React, { Component } from 'react';
import './App.css';
import Time from './components/Time';
import Action from './components/Action'
import Laps from './components/Laps'
class App extends Component {
  constructor() {
    super();

    this.state = {
      time: 0,
      formattedTime: "00:00:00",
      timerState: "stopped",
      laps: [],
      lap: 0
    }
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.stop = this.stop.bind(this);
    this.lap = this.lap.bind(this);
  }

  start() {
    this.timer = setInterval(() =>
      this.setState({
        time: this.state.time + 1,
        formattedTime: this.formatTime(this.state.time + 1),
        timerState: 'running'
      }), 1000);
    console.log('Timer started');
  }
  pause() {
    clearInterval(this.timer);
    this.setState({
      timerState: 'paused'
    })
  }

  lap() {
    let laps = this.state.laps;
    laps.push(this.state.time);
    this.setState({
      lap: this.state.time,
      laps: laps
    });
    console.log('lapped', this.state.lap)

  }

  stop() {
    clearInterval(this.timer);
    this.setState({
      time: 0,
      formattedTime: "00:00:00",
      timerState: "stopped"
    })
    console.log('Timer stopped.')
  }

  formatTime(sec) {
    let date = new Date(null);
    date.setSeconds(sec);
    let formattedTime = date.toISOString().substr(11, 8);
    return formattedTime;
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h3><i className="far fa-clock"></i> Timer App <i className="far fa-clock"></i></h3>
          
        </header>
        <Time time={this.state.formattedTime} />
        <Action
          timerState={this.state.timerState}
          start={this.start}
          pause={this.pause}
          lap={this.lap}
          stop={this.stop}
        />
        <Laps laps={this.state.laps} formatTime={this.formatTime} />
      </div>
    );
  }
}

export default App;
