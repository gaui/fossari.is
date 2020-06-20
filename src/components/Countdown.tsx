import React, { useEffect } from 'react';
import { useReducer } from 'reinspect';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import AnimatedText from './AnimatedText';
import { pick } from 'ramda';
import { getDifference } from '../misc/date';
import countdownReducer, { initialState } from '../redux/reducers/countdown';

const Countdown = (props: CountdownProps) => {
  const { dateFrom, dateTo, onTick } = props;

  const [state, dispatch] = useReducer(
    countdownReducer,
    initialState,
    (initialState: DateDetail) => {
      return initialState;
    },
    'countdownReducer'
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = pick(
        ['days', 'hours', 'minutes', 'seconds'],
        getDifference(dateFrom, dateTo)
      );

      dispatch({ type: 'NEXT_TICK', payload: { ...diff } });
      onTick && onTick(diff);
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [dateFrom, dateTo]);

  return (
    <Wrapper animationname="fade">
      <Timer {...state} />
    </Wrapper>
  );
};

const Timer = (props: DateDetail) => {
  const { t } = useTranslation();

  return (
    <>
      {Object.entries(props)
        .map(([k, v]) => `${v} ${t(k)}`)
        .join(', ')}
    </>
  );
};

const Wrapper = styled(AnimatedText).attrs({
  color: '#999',
})`
  font-size: 0.2em;
`;

export default Countdown;
