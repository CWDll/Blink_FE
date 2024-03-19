import React, { useState } from "react";
import {
  DateRangePicker,
  DateRange,
  Range,
  RangeKeyDict,
} from "react-date-range";
import { addDays } from "date-fns";

function Calendar() {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges: RangeKeyDict) => {
    setState([ranges.selection]);
  };

  return (
    <div>
      <DateRangePicker
        ranges={state}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        editableDateInputs={true}
        months={2}
        direction="horizontal"
      />
    </div>
  );
}

export default Calendar;
