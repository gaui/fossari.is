import * as React from 'react';
import * as ReactDOM from 'react-dom';
import IsItFriday from './components/IsItFriday/IsItFriday';
import Countdown from './components/Countdown/Countdown';
import './app.less';

class App extends React.Component<{}, AppState> {
  private interval: number;

  constructor() {
    super();

    this.state = {
      loaded: false,
      friday: this.isFriday()
    };

    // Set interval to update state every minute
    this.interval = setInterval(() => {
      this.updateState(true);
    }, 1000);
  }

  isFriday(): boolean {
    const date = new Date();
    const isFriday =
      date.getDay() === 5 || (date.getDay() === 6 && date.getHours() <= 5);

    return isFriday;
  }

  updateState(loaded : boolean) {
    this.setState({
      loaded,
      friday: this.isFriday()
    });
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  getLoader = () => {
    return <i className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i>;
  }

  render() {
    if (!this.state.loaded) {
      return this.getLoader();
    }

    return (
      <div>
        <IsItFriday friday={this.state.friday} />
        {!this.state.friday ? <Countdown /> : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
