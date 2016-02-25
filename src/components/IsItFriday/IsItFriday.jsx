import React from 'react';

export default class IsItFriday extends React.Component {
  constructor(props) {
    super(props);

    let self = this;
    self.state = {
      text: props.friday ? 'já' : 'nei',
      class: props.friday ? 'yes' : 'no',
    };
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
