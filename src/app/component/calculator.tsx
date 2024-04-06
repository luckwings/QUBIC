import RangeSlider from "./rangeSlider/rangeSlider";
import { usePageStore, useDataRange, usePercent } from "@/hooks";
import { checkBoxList } from "./dayrange";
import Toggle from "./gadget/toggle";
import { useState, useEffect } from "react";

export default function Calculator() {
  const setPageState = usePageStore((state) => state.setPageState);
  const { dayRange, setDayRange } = useDataRange((dayRange) => ({
    dayRange: dayRange.dayRange,
    setDayRange: dayRange.setDayRange,
  }));

  const [toggleState, setToggleState] = useState(false);

  const { percent, setPercent } = usePercent((percent) => ({
    percent: percent.percent,
    setPercent: percent.setPercent,
  }));

  const handleToggle = (isChecked: boolean) => {
    isChecked ? setToggleState(false) : setToggleState(true);
    console.log(toggleState);
  };

  return (
    <div id="calculator" className="flex justify-center m-auto w-full">
      <div className="w-full md:w-[400px] relative">
        <div className="flex absolute justify-center w-[20%] bg-[#1d202c] rounded-tr-2xl pt-2 pb-8 right-0 top-4 text-white text-2xl">
          X
        </div>

        <div className="flex">
          <div className="flex rounded-t-2xl bg-[#272b3a] text-white w-[80%] p-2">
            <div className="flex justify-center border-solid border-2 border-[#ac5cff] rounded-full bg-[#100f17] text-white px-4 py-2 ml-4">
              ROI Calcuator
            </div>
          </div>

          <button
            className="w-[20%] relative flex"
            onClick={() => setPageState("stake")}
          >
            <div
              id="curved-corner-bottomleft"
              className="absolute bottom-0"
            ></div>
          </button>
        </div>

        <div className="rounded-tr-2xl rounded-b-2xl bg-[#272b3a] text-white w-full md:w-[400px] p-4 relative text-[14px]">
          <div className="items-center w-[100%] bg-[#100f17] border-solid border-2 border-[#ac5cff] rounded-[20px] p-6">
            <div className="flex justify-center mb-6 ">
              <div className="w-full flex justify-between items-center rounded-full bg-[#272b3a] p-2">
                <div className="flex items-center">
                  <img
                    src="/image/qubic-logo-1.png"
                    alt=""
                    className="h-12 w-12"
                  />
                  <div className="pl-2">
                    <div>Stake Qubic 0.0000000</div>
                    <div>$0</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="px-1">1</div>
              <RangeSlider min={0} max={100} initial={percent} type={"percent"} page={"calculator"} />
              <div className="px-1">100%</div>
            </div>

            <div className="flex justify-center mb-6 mt-8">
              <div className="w-full flex justify-between items-center rounded-full bg-[#272b3a] p-2">
                <div className="flex items-center">
                  <img
                    src="/image/qubic-logo-1.png"
                    alt=""
                    className="h-12 w-12"
                  />
                  <div className="pl-2">Stake for</div>
                </div>
                <div className="items-end mr-10">Days {dayRange}</div>
              </div>
            </div>

            <div className="flex justify-between" id="calculator">
              <div className="px-1">3</div>
              <RangeSlider min={2} max={365} initial={dayRange} type={"time"} page={"calculator"} />
              <div className="px-1">365</div>
            </div>

            <div className="flex justify-center mt-8">
              <div className="w-full flex items-center rounded-full bg-[#272b3a]">
                <div className="w-full rounded-full flex items-center transition duration-300 focus:outline-none bg-outline dark:bg-primary pl-1">
                  <Toggle label="Toggle button" onToggle={handleToggle} />
                </div>
                {checkBoxList.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className={`flex py-3 w-full rounded-full flex justify-center text-lg font-bold ${
                        dayRange === item.value ? "bg-[#ac5cff]" : ""
                      }`}
                      onClick={() => setDayRange(item.value)}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="items-center w-[100%] bg-[#272b3a] border-solid border-2 border-[#ac5cff] rounded-[20px] px-4 py-2 mt-8 grid gap-2">
              <div>ROI AT CURRENT RATE</div>
              <div>$0.00</div>
              <div>0.00%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
