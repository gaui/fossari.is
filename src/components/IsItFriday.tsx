import React, { useState, useEffect } from 'react';
import NProgress from 'nprogress';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { getNextWeekDay, isFriday } from '../misc/date';
import AnimatedText from './AnimatedText';
import Countdown from './Countdown';

const Wrapper = styled.div`
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

const Title = styled.div`
  grid-area: app_title;
  font-size: 0.5em;
`;

const Main = styled.div`
  grid-area: app_main;
`;

const Extra = styled.div`
  grid-area: app_extra;
  align-self: center;
`;

const displayDetails = (isFriday: boolean) => {
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
};

const IsItFriday = () => {
  const { t } = useTranslation();

  const currentDate = new Date();
  const nextFriday = getNextWeekDay(new Date(), 5);
  const isItFriday = isFriday(currentDate) && window.friday !== false;
  const details = displayDetails(isItFriday);

  const [state, setState] = useState<IsItFridayState>({
    loaded: false,
    isFriday: false,
    currentDate,
    nextFriday
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState({
        loaded: true,
        isFriday: isItFriday,
        currentDate,
        nextFriday
      });
    }, 1000);

    if (!state.loaded) {
      NProgress.start();
    } else {
      NProgress.done();
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentDate]);

  if (!state.loaded) return <></>;

  return (
    <div id="IsItFriday">
      <Wrapper>
        <Title>{isItFriday ? t('its') : `${t('isit')} ${t('friday')}?`}</Title>
        <Main>
          <AnimatedText
            animationname={details.animationname}
            color={details.color}
            iterationcount={details.iterationcount}
            size={details.size}
          >
            {t(details.text)}
          </AnimatedText>
        </Main>
        <Extra>
          {!isItFriday && (
            <Countdown dateFrom={state.currentDate} dateTo={state.nextFriday} />
          )}
        </Extra>
      </Wrapper>
    </div>
  );
};

export default IsItFriday;
