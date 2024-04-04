'use client';

import React, { ChangeEvent, FC, useCallback, useEffect, useState, useRef } from 'react';
import './rangeSlider.css';

interface rangeSliderProps {
  min: number;
  max: number;
  type: string;
}

const RangeSlider: FC<rangeSliderProps> = ({ min, max, type }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
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
    
    console.log(maxVal); //current slide target value
  }, [maxVal, getPercent]);

  return (
    <div className="container">
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
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track"></div>
          <div ref={range} className="slider__range"></div>
          {/* <div className="slider__left-value">{minVal}</div>
          <div className="slider__right-value">{maxVal}</div> */}
        </div>
      </div>
  );
};

export default RangeSlider;
