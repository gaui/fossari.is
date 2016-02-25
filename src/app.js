import React from 'react';
import ReactDOM from 'react-dom';
import IsItFriday from './components/IsItFriday/IsItFriday';
import Countdown from './components/Countdown/Countdown';
require('./app.less');

// Hide everything until DOM has been loaded
document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('wrapper').style.display = 'flex';
});

class App extends React.Component {
  constructor(props) {
    super(props);

    let self = this;
    self.state = this.getNextState();

    // Set interval to update state every minute
    self.interval = setInterval(function() {
      self.updateState();
    }, 1000);
  }

  componentWillUnmount() {
    if(this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  getNextState() {
    const date = new Date();
    const isFriday = date.getDay() === 5 ||
      (date.getDay() === 6 && date.getHours() <= 5);

    return {
      friday: isFriday
    };
  }

  updateState() {
    this.setState(this.getNextState());
  }

  render() {
    return (
      <div>
        <IsItFriday friday={this.state.friday} />
        {!this.state.friday ? <Countdown /> : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
