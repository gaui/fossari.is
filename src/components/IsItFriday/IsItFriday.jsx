import React from 'react';

export default class IsItFriday extends React.Component {
  constructor(props) {
    super(props);

    let self = this;
    self.state = this.getNextState();

    // Set interval to update state every minute
    self.interval = setInterval(function() {
      self.updateState();
    }, 60000);
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
      text: isFriday ? 'já' : 'nei',
      class: isFriday ? 'yes' : 'no',
    };
  }

  updateState() {
    this.setState(this.getNextState());
  }

  render() {
    return (
      <div>
        <div>Er fössari?</div>
        <div className={this.state.class}>{this.state.text}</div>
      </div>
    )
  }
}
