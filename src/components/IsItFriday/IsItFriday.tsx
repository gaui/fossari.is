import * as React from 'react';

export default class IsItFriday extends React.Component<
  IsItFridayProps,
  IsItFridayState
> {
  constructor(props: IsItFridayProps) {
    super(props);

    this.state = this.getNextState();
  }

  getNextState(): IsItFridayState {
    const map = {
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
    const dayOfWeek: number = new Date().getDay();
    const opacity: number = Math.abs((5 - dayOfWeek) / 4);

    const styles = {
      opacity: this.props.friday ? 1 : opacity
    };

    return (
      <div id="IsItFriday">
        <div>Er fössari?</div>
        <div
          style={styles}
          className={this.state.cssClass}
          title={opacity * 100 + '%'}
        >
          {this.state.text}
        </div>
      </div>
    );
  }
}
