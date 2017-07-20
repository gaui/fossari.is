import * as React from 'react';
import * as ReactDOM from 'react-dom';

import IsItFriday from './components/IsItFriday/IsItFriday';
import Countdown from './components/Countdown/Countdown';

import './app.less';

class App extends React.Component<{}, AppState> {
  private interval : number;

  constructor() {
      super();

    let self = this;
    self.state = this.getNextState();

    // Set interval to update state every minute
    self.interval = setInterval(function() {
      self.updateState();
    }, 1000);
  }

  getNextState() : AppState {
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

  componentWillUnmount() {
    if(this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
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
