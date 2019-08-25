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
}

declare module '*.css';
declare module 'nprogress';
declare module 'styled-components';
