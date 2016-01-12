import React from 'react';

export default class IsItFriday extends React.Component {
  constructor(props) {
    super(props);

    const isFriday = new Date().getDay() === 5;

    this.state = {
      text: isFriday ? 'já' : 'nei',
      class: isFriday ? 'yes' : 'no',
    };
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
