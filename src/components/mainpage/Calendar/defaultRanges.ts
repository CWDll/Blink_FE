// export default {
//   'Today': {
//     startDate: (now) => {
//       return now;
//     },
//     endDate: (now) => {
//       return now;
//     }
//   },
//   'Last 7 Days': {
//     startDate: (now) => {
//       return now.subtract(6, 'days');
//     },
//     endDate: (now) => {
//       return now;
//     }
//   },
//   'Last 14 Days': {
//     startDate: (now) => {
//       return now.subtract(13, 'days');
//     },
//     endDate: (now) => {
//       return now;
//     }
//   },
//   'Last 28 Days': {
//     startDate: (now) => {
//       return now.subtract(27, 'days');
//     },
//     endDate: (now) => {
//       return now;
//     }
//   },
//   'Last 90 Days': {
//     startDate: (now) => {
//       return now.subtract(89, 'days');
//     },
//     endDate: (now) => {
//       return now;
//     }
//   },
//   'Last 120 Days': {
//     startDate: (now) => {
//       return now.subtract(119, 'days');
//     },
//     endDate: (now) => {
//       return now;
//     }
//   }
// }
import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
  isSameDay,
  differenceInCalendarDays,
} from "date-fns";

interface Defineds {
  startOfWeek: Date;
  endOfWeek: Date;
  startOfLastWeek: Date;
  endOfLastWeek: Date;
  startOfToday: Date;
  endOfToday: Date;
  startOfYesterday: Date;
  endOfYesterday: Date;
  startOfMonth: Date;
  endOfMonth: Date;
  startOfLastMonth: Date;
  endOfLastMonth: Date;
}

const defineds: Defineds = {
  startOfWeek: startOfWeek(new Date()),
  endOfWeek: endOfWeek(new Date()),
  startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
  endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
  startOfToday: startOfDay(new Date()),
  endOfToday: endOfDay(new Date()),
  startOfYesterday: startOfDay(addDays(new Date(), -1)),
  endOfYesterday: endOfDay(addDays(new Date(), -1)),
  startOfMonth: startOfMonth(new Date()),
  endOfMonth: endOfMonth(new Date()),
  startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
  endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
};

interface StaticRangeHandler {
  range: () => { startDate: Date; endDate: Date };
  isSelected: (range: { startDate: Date; endDate: Date }) => boolean;
}

const staticRangeHandler: StaticRangeHandler = {
  range: () => ({
    startDate: new Date(),
    endDate: new Date(),
  }),
  isSelected(range) {
    const definedRange = this.range();
    return (
      isSameDay(range.startDate, definedRange.startDate) &&
      isSameDay(range.endDate, definedRange.endDate)
    );
  },
};

export function createStaticRanges(ranges: any[]) {
  return ranges.map((range) => ({ ...staticRangeHandler, ...range }));
}

interface StaticRange {
  label: string;
  range: () => { startDate: Date; endDate: Date };
}

export const defaultStaticRanges: StaticRange[] = createStaticRanges([
  {
    label: "Today",
    range: () => ({
      startDate: defineds.startOfToday,
      endDate: defineds.endOfToday,
    }),
  },
  {
    label: "Yesterday",
    range: () => ({
      startDate: defineds.startOfYesterday,
      endDate: defineds.endOfYesterday,
    }),
  },
  {
    label: "This Week",
    range: () => ({
      startDate: defineds.startOfWeek,
      endDate: defineds.endOfWeek,
    }),
  },
  {
    label: "Last Week",
    range: () => ({
      startDate: defineds.startOfLastWeek,
      endDate: defineds.endOfLastWeek,
    }),
  },
  {
    label: "This Month",
    range: () => ({
      startDate: defineds.startOfMonth,
      endDate: defineds.endOfMonth,
    }),
  },
  {
    label: "Last Month",
    range: () => ({
      startDate: defineds.startOfLastMonth,
      endDate: defineds.endOfLastMonth,
    }),
  },
]);

interface InputRange {
  label: string;
  range: (value: string) => { startDate: Date; endDate: Date };
  getCurrentValue: (range: {
    startDate: Date | null;
    endDate: Date | null;
  }) => string | number;
}

export const defaultInputRanges: InputRange[] = [
  {
    label: "days up to today",
    range(value) {
      return {
        startDate: addDays(
          defineds.startOfToday,
          (Math.max(Number(value), 1) - 1) * -1
        ),
        endDate: defineds.endOfToday,
      };
    },
    getCurrentValue(range) {
      if (!range.endDate) return "-"; // endDate가 null이면 '-'를 반환합니다.
      if (!isSameDay(range.endDate, defineds.endOfToday)) return "-";
      if (!range.startDate) return "∞";
      return differenceInCalendarDays(defineds.endOfToday, range.startDate) + 1;
    },
  },
  {
    label: "days starting today",
    range(value) {
      const today = new Date();
      return {
        startDate: today,
        endDate: addDays(today, Math.max(Number(value), 1) - 1),
      };
    },
    getCurrentValue(range) {
      if (!range.startDate) return "-"; // startDate가 null이면 '-'를 반환합니다.
      if (!isSameDay(range.startDate, defineds.startOfToday)) return "-";
      if (!range.endDate) return "∞";
      return differenceInCalendarDays(range.endDate, defineds.startOfToday) + 1;
    },
  },
];
