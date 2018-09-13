import React, { Fragment } from 'react';
import { translate } from 'react-i18next';
import styled from 'styled-components';
import { getDifference } from '../misc/date';
import AnimatedText from './AnimatedText';

@translate()
class Countdown extends React.Component<CountdownProps, CountdownState> {
  state = {
    loaded: false,
    time: {
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    }
  } as CountdownState;
  constructor(props: any) {
    super(props);
  }

  public static Wrapper = styled(AnimatedText).attrs({
    color: '#999'
  })`
    font-size: 0.2em;
  `;

  getDifference(): CountdownTimeState {
    const { dateFrom, dateTo } = this.props;

    const diff = getDifference(dateFrom, dateTo);

    return diff;
  }

  componentWillReceiveProps() {
    const diff = this.getDifference();
    this.setState({ loaded: diff.seconds !== '', time: diff });
  }

  public static Timer = (props: any) => {
    const { t, time } = props;

    return (
      <>
        {Object.keys(time).map((k, i, a) => (
          <Fragment key={k}>
            <span key={k}>
              {time[k]} {t(k)}
            </span>
            {i !== a.length - 1 && <span> / </span>}
          </Fragment>
        ))}
      </>
    );
  };

  render() {
    const { loaded, time } = this.state;

    return (
      loaded && (
        <Countdown.Wrapper animationname="fade">
          <Countdown.Timer time={time} {...this.props} />
        </Countdown.Wrapper>
      )
    );
  }
}

export default Countdown;
