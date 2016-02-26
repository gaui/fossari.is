import React from 'react';

export default class IsItFriday extends React.Component {
  constructor(props) {
    super(props);

    this.map = {
      true: {
        text: 'já',
        class: 'yes'
      },
      false: {
        text: 'nei',
        class: 'no'
      }
    };

    this.state = this.getNextState();
  }

  componentWillReceiveProps() {
    this.setState(this.getNextState());
  }

  getNextState() {
    return this.map[this.props.friday];
  }

  render() {
    return (
      <div id="IsItFriday">
        <div>Er fössari?</div>
        <div className={this.state.class}>{this.state.text}</div>
      </div>
    )
  }
}
