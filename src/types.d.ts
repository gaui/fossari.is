interface AppState {
  nextFriday: Date;
}

interface IsItFridayState {
  loaded: boolean;
  isFriday: boolean;
  currentDate: Date;
  nextFriday: Date;
}

interface CountdownProps {
  dateFrom: Date;
  dateTo: Date;
}

interface CountdownState {
  loaded: boolean;
  time?: DateDetail;
}

interface CountdownTimerProps {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface StyledComponentsHelperProps {
  [key: string]: unknown;
}

interface Window {
  friday: boolean;
}

declare module '*.css';
declare module 'nprogress';
declare module 'styled-components';
