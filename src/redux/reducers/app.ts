import NProgress from 'nprogress';
import { getNextWeekDay } from '../../misc/date';
import isFriday from 'date-fns/fp/isFriday';
import isSameDay from 'date-fns/fp/isSameDay';

export const initialState: AppState = {
  loaded: false,
  isFriday: false,
  currentDate: new Date(),
  display: {
    text: 'no',
    animationname: 'swoosh',
    color: 'red',
    size: '2em',
    iterationcount: '1',
  },
};

const AppReducer = (
  state: AppState,
  action: { type: string; payload: Partial<AppState> }
) => {
  switch (action.type) {
    case 'IS_LOADED':
      if (!action.payload.loaded) {
        NProgress.start();
      } else {
        NProgress.done();
      }

      return {
        ...state,
        loaded: action.payload.loaded,
      };
    case 'SET_DATES':
      const currentDate = action.payload.currentDate || new Date();
      const nextFriday = getNextWeekDay(currentDate, 5);
      const isItFriday = isFriday(currentDate) && window.friday !== false;
      const displayFriday = {
        text: 'friday',
        animationname: 'tada',
        color: 'green',
        size: '1m',
        iterationcount: 'infinite',
      };
      const display = isItFriday ? displayFriday : initialState.display;

      const newState = {
        ...state,
        currentDate,
        nextFriday,
        isFriday: isItFriday,
        display,
      };

      // Svenni graduation feature flag
      if (isSameDay(currentDate, new Date(2020, 5, 20))) {
        newState.isFriday = true;
        newState.display = { ...displayFriday, text: 'graduation' };
      }

      return newState;
    default:
      throw new Error();
  }
};

export default AppReducer;
