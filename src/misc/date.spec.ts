import { getDifference, getNextWeekDay } from './date';
import countdownReducer from '../redux/reducers/countdown';

// NOTICE: The Date constructor takes month index as the second parameter,
// so it's always N-1. For example February is 1

describe('Date util tests', () => {
  const dateDetailDefault = {
    milliseconds: 0,
    months: 0,
    weeks: 0,
    years: 0,
  };

  it.each([
    [
      new Date(2020, 1, 25, 2, 15, 0),
      new Date(2020, 1, 28),
      {
        days: 2,
        hours: 21,
        minutes: 45,
        seconds: 0,
        ...dateDetailDefault,
      } as DateDetail,
    ],
    [
      new Date(2020, 1, 25, 2, 38, 35),
      new Date(2020, 1, 28),
      {
        days: 2,
        hours: 21,
        minutes: 21,
        seconds: 25,
        ...dateDetailDefault,
      } as DateDetail,
    ],
  ])(
    'should return appropriate time duration between dates',
    (dateFrom: Date, dateTo: Date, expectedDiff: DateDetail) => {
      const actualDiff = getDifference(dateFrom, dateTo);
      expect(actualDiff).toEqual(expectedDiff);
    }
  );
});
