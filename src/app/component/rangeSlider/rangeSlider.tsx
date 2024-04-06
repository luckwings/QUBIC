'use client';

import React, { ChangeEvent, FC, useCallback, useEffect, useState, useRef } from 'react';
import './rangeSlider.css';

import { useDataRange, usePercent } from "@/hooks";

interface rangeSliderProps {
  min: number;
  max: number;
  initial: number;
  type: string;
  page: string;
}

const RangeSlider: FC<rangeSliderProps> = ({ min, max, initial, type, page }) => {
  const { dayRange, setDayRange } = useDataRange((dayRange) => ({
    dayRange: dayRange.dayRange,
    setDayRange: dayRange.setDayRange,
  }));

  const { percent, setPercent } = usePercent((percent) => ({
    percent: percent.percent,
    setPercent: percent.setPercent,
  }));

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(initial);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement>(null); 

  // Convert to percentage
  const getPercent = useCallback((value: number) =>
    Math.round(((value - min) / (max - min)) * 100), [min, max])

  // Set width of the range to decrease from the left side
//   useEffect(() => {
//     const minPercent = getPercent(minVal);
//     const maxPercent = getPercent(maxValRef.current);

//     if (range.current) {
//       range.current.style.left = `${minPercent}%`;
//       range.current.style.width = `${maxPercent - minPercent}%`;
//     }
//   }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = 0;
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }

    if(type === "time") {
      setDayRange(maxVal);
      console.log(dayRange);
    } if (type === "percent") {
      setPercent(maxVal);
      console.log(percent);
    } else {
      
    }
  }, [maxVal, getPercent]);

  return (
    <div className="slide_container">
        <input
          type="range"
          min={0}
          max={max}
          value={maxVal}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {  
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className={`${page === "calculator" ? "thumb_cal thumb--right_cal" : "thumb_stake thumb--right_stake"}`}
        />

        <div className="slider">
          <div className={`${page === "calculator" ? "slider__track_cal" : "slider__track_stake"}`}></div>
          <div ref={range} className={`${page === "calculator" ? "slider__range_cal" : "slider__range_stake"}`}></div>
          {/* <div className="slider__left-value">{minVal}</div>
          <div className="slider__right-value">{maxVal}</div> */}
        </div>
      </div>
  );
};

export default RangeSlider;
