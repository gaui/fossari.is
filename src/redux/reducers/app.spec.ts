import { getDifference, getNextWeekDay } from '../../misc/date';
import appReducer, { initialState } from '../../redux/reducers/app';

describe('App reducer tests', () => {
  const WEEKDAY_FRIDAY = 5;

  it.each([
    [new Date(2020, 1, 25, 2, 15, 0), new Date(2020, 1, 28), WEEKDAY_FRIDAY],
    [new Date(2020, 1, 29, 4), new Date(2020, 2, 6), WEEKDAY_FRIDAY]
  ])(
    'should return weekday relative from a date',
    (fromDate: Date, toDate: Date, weekday: number) => {
      const dateObj = appReducer(initialState, {
        type: 'SET_DATES',
        payload: { currentDate: fromDate }
      });
      const nextFriday = getNextWeekDay(dateObj.nextFriday!, weekday);
      expect(nextFriday).toEqual(toDate);
    }
  );
});
