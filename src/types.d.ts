interface AppState {
  loaded: boolean;
  isFriday: boolean;
  currentDate?: Date;
  nextFriday?: Date;
  display: {
    text: string;
    animationname: string;
    color: string;
    size: string;
    iterationcount: string;
  };
}

interface CountdownProps {
  dateFrom: Date;
  dateTo: Date;
  onTick?: (diff: DateDetail) => void;
}

interface CountdownState {
  loaded: boolean;
  time?: DateDetail;
}

interface DateDetail {
  years?: number;
  months?: number;
  weeks?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
}

interface StyledComponentsHelperProps {
  [key: string]: unknown;
}

interface Window {
  friday: boolean;
  __REDUX_DEVTOOLS_EXTENSION__: any;
}

declare module '*.css';
declare module 'nprogress';
declare module 'styled-components';
