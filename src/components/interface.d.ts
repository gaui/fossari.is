interface AppState {
  loaded : boolean;
  friday : boolean
}

interface IsItFridayProps {
  friday: boolean;
}

interface IsItFridayState {
  text: string;
  cssClass: string;
}

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
