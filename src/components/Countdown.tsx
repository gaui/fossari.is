import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { getDifference } from '../misc/date';
import AnimatedText from './AnimatedText';
import * as R from 'ramda';

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
  color: '#999'
})`
  font-size: 0.2em;
`;

const Countdown = (props: CountdownProps) => {
  const { dateFrom, dateTo } = props;

  const [state, setState] = useState<DateDetail>();

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = R.pick(
        ['days', 'hours', 'minutes', 'seconds'],
        getDifference(dateTo, dateFrom)
      );
      setState({ ...diff });
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

export default Countdown;
