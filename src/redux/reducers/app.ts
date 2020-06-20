import NProgress from 'nprogress';
import { getNextWeekDay } from '../../misc/date';
import isFriday from 'date-fns/fp/isFriday';

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
      const display = isItFriday
        ? {
            text: 'friday',
            animationname: 'tada',
            color: 'green',
            size: '1m',
            iterationcount: 'infinite',
          }
        : initialState.display;

      return {
        ...state,
        currentDate,
        nextFriday,
        isFriday: isItFriday,
        display,
      };
    default:
      throw new Error();
  }
};

export default AppReducer;
