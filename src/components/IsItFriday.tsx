import React from 'react';
import NProgress from 'nprogress';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';
import { getNextWeekDay, isFriday } from '../misc/date';
import AnimatedText from './AnimatedText';
import Countdown from './Countdown';

class IsItFriday extends React.Component<any, IsItFridayState> {
  state = {
    loaded: false,
    isFriday: false,
    currentDate: new Date(),
    nextFriday: getNextWeekDay(new Date(), 5)
  };

  private interval: number | null;

  constructor(props: any) {
    super(props);
  }

  public static Wrapper = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: auto auto 50px;
    grid-template-areas:
      'app_title'
      'app_main'
      'app_extra';

    text-align: center;

    @media (max-width: 576px) and (min-height: 10vh) {
      font-size: 10vh;
    }
  `;

  public static Title = styled.div`
    grid-area: app_title;
    font-size: 0.5em;
  `;

  public static Main = styled.div`
    grid-area: app_main;
  `;

  public static Extra = styled.div`
    grid-area: app_extra;
    align-self: center;
  `;

  updateState() {
    const currentDate = new Date();
    const nextFriday = getNextWeekDay(new Date(), 5);

    this.setState({
      loaded: true,
      isFriday: isFriday(currentDate),
      currentDate,
      nextFriday
    });

    NProgress.done();
  }

  componentWillMount() {
    NProgress.start();
    this.interval = setInterval(() => {
      this.updateState();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  render() {
    const { loaded, isFriday, currentDate, nextFriday } = this.state;
    const t = this.props.t;

    const isItFriday = isFriday && (window as any).friday !== false;
    const details = this.displayDetails(isItFriday);

    return (
      loaded && (
        <div id="IsItFriday">
          <IsItFriday.Wrapper>
            <IsItFriday.Title>
              {isItFriday ? t('its') : `${t('isit')} ${t('friday')}?`}
            </IsItFriday.Title>
            <IsItFriday.Main>
              <AnimatedText
                animationname={details.animationname}
                color={details.color}
                iterationcount={details.iterationcount}
                size={details.size}
              >
                {t(details.text)}
              </AnimatedText>
            </IsItFriday.Main>
            <IsItFriday.Extra>
              {!isItFriday && (
                <Countdown dateFrom={currentDate} dateTo={nextFriday} />
              )}
            </IsItFriday.Extra>
          </IsItFriday.Wrapper>
        </div>
      )
    );
  }

  private displayDetails(isFriday: boolean) {
    const details: any = {
      text: 'no',
      animationname: 'swoosh',
      color: 'red',
      size: '2em',
      iterationcount: '1'
    };

    if (isFriday) {
      details.text = 'friday';
      details.animationname = 'tada';
      details.color = 'green';
      details.size = '1m';
      details.iterationcount = 'infinite';
    }

    return details;
  }
}

export default withTranslation()(IsItFriday);
