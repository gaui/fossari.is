import * as React from 'react';
import * as moment from 'moment';

export default class Countdown extends React.Component<{}, CountdownState> {
  constructor() {
    super();
    moment.locale('is');

    this.state = this.getMoment();
  }

  getMoment() {
    const nextFriday =
      moment().day() > 5
        ? moment().endOf('week').add(1, 'day').day(5).startOf('day')
        : moment().day(5).startOf('day');
    const diff = moment.duration(nextFriday.diff(moment()));

    return {
      days: diff.days(),
      hours: diff.hours(),
      minutes: diff.minutes(),
      seconds: diff.seconds()
    };
  }

  componentWillReceiveProps() {
    this.setState(this.getMoment());
  }

  render() {
    return (
      <div id="Countdown">
        <div>
          {this.state.days} dagar, {this.state.hours} klst, {this.state.minutes}{' '}
          mín, {this.state.seconds} sek.
        </div>
      </div>
    );
  }
}
