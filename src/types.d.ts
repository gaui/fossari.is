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
  time: CountdownTimeState;
}

interface CountdownTimeState {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

declare module '*.css';
declare module 'nprogress';
declare module 'styled-components';
