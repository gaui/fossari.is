import GlobalStyle from './GlobalStyle';
import FacebookLike from './FacebookLike';
import GitHub from './GitHub';
import LanguageBar from './LanguageBar';
import Version from './Version';
import React, { useReducer, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import AnimatedText from './AnimatedText';
import Countdown from './Countdown';
import appReducer, { initialState } from '../redux/reducers/app';
import packageJson from '../../package.json';

const App = () => (
  <GlobalWrapper>
    <GlobalStyle />
    <IsItFriday />
    <LanguageBar />
    <Version number={packageJson.version} />
    <GitHub url="https://github.com/gaui/fossari.is" />
    <FacebookLike url="https://fossari.is" />
  </GlobalWrapper>
);

const IsItFriday = () => {
  const { t } = useTranslation();

  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_DATES', payload: { currentDate: new Date() } });
  }, []);

  const onTick = (diff: DateDetail) => {
    if (!state.loaded) {
      dispatch({ type: 'IS_LOADED', payload: { loaded: true } });
    }

    dispatch({ type: 'SET_DATES', payload: { currentDate: new Date() } });
  };

  return (
    <Wrapper>
      <Title>
        {state.isFriday ? t('its') : `${t('isit')} ${t('friday')}?`}
      </Title>
      <Main>
        <AnimatedText
          animationname={state.display.animationname}
          color={state.display.color}
          iterationcount={state.display.iterationcount}
          size={state.display.size}
        >
          {t(state.display.text)}
        </AnimatedText>
      </Main>
      <Extra>
        {!state.isFriday && state.currentDate && state.nextFriday && (
          <Countdown
            dateFrom={state.currentDate}
            dateTo={state.nextFriday}
            onTick={onTick}
          />
        )}
      </Extra>
    </Wrapper>
  );
};

const GlobalWrapper = styled.div`
  height: 100%;
  padding: 10px;
  box-sizing: border-box;

  display: grid;
  grid-auto-columns: 20% 60% 20%;
  grid-auto-rows: auto auto auto;
  grid-template-areas:
    'lang app version'
    '. app .'
    'fb app github';
`;

const Wrapper = styled.div`
  grid-area: app;
  justify-self: center;
  align-self: center;
  font-size: 20vh;

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

export default App;
