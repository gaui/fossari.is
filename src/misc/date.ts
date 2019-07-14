import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  isAfter,
  isFriday as friday,
  isSameDay as sameDay,
  addWeeks,
  endOfISOWeek,
  subDays
} from 'date-fns';

function getNextWeekDay(date: Date, weekDay: number): Date {
  const last = subDays(endOfISOWeek(date), 7 - weekDay);
  const next = isAfter(date, last) ? addWeeks(last, 1) : last;

  return next;
}

function getDifference(dateTo: Date, dateFrom: Date): CountdownTimeState {
  return {
    days: differenceInDays(dateFrom, dateTo).toLocaleString('de-GB'),
    hours: differenceInHours(dateFrom, dateTo).toLocaleString('de-GB'),
    minutes: differenceInMinutes(dateFrom, dateTo).toLocaleString('de-GB'),
    seconds: differenceInSeconds(dateFrom, dateTo).toLocaleString('de-GB')
  };
}

function isSameDay(dateFrom: Date, dateTo: Date): boolean {
  return sameDay(dateFrom, dateTo);
}

function isFriday(date: Date): boolean {
  return friday(date);
}

export { getNextWeekDay, getDifference, isFriday, isSameDay };
