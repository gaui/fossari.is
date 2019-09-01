import {
  isAfter,
  isSameDay as sameDay,
  addWeeks,
  endOfISOWeek,
  subDays
} from 'date-fns';

const getNextWeekDay = (date: Date, weekDay: number): Date => {
  const last = subDays(endOfISOWeek(date), 7 - weekDay);
  const next = isAfter(date, last) ? addWeeks(last, 1) : last;

  return next;
};

const getDifference = (sourceDate: Date, targetDate: Date): DateDetail => {
  const r: DateDetail = {} as DateDetail;
  const s: DateDetail = {
    years: 31536000,
    months: 2592000,
    weeks: 604800,
    days: 86400,
    hours: 3600,
    minutes: 60,
    seconds: 1,
    milliseconds: 1
  };

  const calc = (key: string) =>
    key === 'milliseconds' ? s[key] : s[key] * 1000;

  const diff = targetDate.getTime() - sourceDate.getTime();
  let d = Math.abs(diff);
  Object.entries(s).forEach(([key]) => {
    const datePart = calc(key) || 0;
    r[key] = Math.floor(d / datePart);
    d -= r[key] * datePart;
  });

  return r;
};

export { getNextWeekDay, getDifference };
