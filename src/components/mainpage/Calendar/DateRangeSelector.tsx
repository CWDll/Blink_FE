import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { defaultStaticRanges } from "./defaultRanges";
import { format } from "date-fns";
import styled from "styled-components";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import "./Datepicker.css";

interface DateRangeSelectorProps {
  ranges?: any[]; // defaultStaticRanges와 같은 타입으로 변경하는 것이 좋습니다.
  onSubmit?: () => void;
}

const StyledRangeSelector = styled(DateRangePicker)`
  position: absolute;
  width: auto;
  height: auto;
  z-index: 1000;
  right: 25%;
  top: 20%;
  border: 2px solid gray;
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  justify-contens: flex-start;
  /* align-items: center; */
`;

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  ranges = defaultStaticRanges,
  onSubmit,
}) => {
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [show, setShow] = useState(false);

  function formatDateDisplay(date: Date | null, defaultText: string) {
    if (!date) return defaultText;
    return format(date, "MM/DD/YYYY");
  }

  const handleSelect = (ranges: any) => {
    setSelectedDateRange(ranges.selection);
    console.log(ranges.selection);
  };

  const onClickClear = () => {
    setSelectedDateRange({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    });
    setShow(false);
  };

  return (
    <React.Fragment>
      <div className="shadow d-inline-block">
        <StyledRangeSelector
          onChange={handleSelect}
          // showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={1}
          ranges={[selectedDateRange]}
          direction="horizontal"
        />
        {/* <div className="text-right position-relative rdr-buttons-position mt-2 mr-3">
          <button
            className="btn btn-transparent text-primary rounded-0 px-4 mr-2"
            onClick={() => setShow(true)}
          >
            Done
          </button>
          <button
            className="btn btn-transparent text-danger rounded-0 px-4"
            onClick={onClickClear}
          >
            Clear
          </button>
        </div> */}
      </div>

      {/* {show && (
        <div className="h-100 mt-3 alert alert-transparent">
          <p className="my-auto d-inline">
            Start Date :{" "}
            {formatDateDisplay(selectedDateRange.startDate, "Default Text")}
            {" | "}
            End Date :{" "}
            {formatDateDisplay(selectedDateRange.endDate, "End Date")}
          </p>
          <button
            className="mb-1 btn btn-transparent text-danger my-custom-button"
            onClick={() => setShow(false)}
          >
            Close
          </button>
        </div>
      )} */}
    </React.Fragment>
  );
};

export default DateRangeSelector;
