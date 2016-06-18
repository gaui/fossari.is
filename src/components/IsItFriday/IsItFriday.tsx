import * as React from 'react';

interface IsItFridayProps {
  friday : boolean
}

interface IsItFridayState {
  text : string,
  cssClass : string
}

export default class IsItFriday extends React.Component<IsItFridayProps, IsItFridayState> {
  constructor(props : IsItFridayProps) {
    super(props);

    this.state = this.getNextState();
  }

  getNextState(): IsItFridayState {
    let map = {
      yes: {
        text: 'já',
        cssClass: 'yes'
      },
      no: {
        text: 'nei',
        cssClass: 'no'
      }
    };

    return this.props.friday ? map['yes'] : map['no'];
  }

  componentWillReceiveProps() {
    this.setState(this.getNextState());
  }

  render() {
    return (
      <div id="IsItFriday">
        <div>Er fössari?</div>
        <div className={this.state.cssClass}>{this.state.text}</div>
      </div>
    )
  }
}
