import RangeSlider from "../../rangeSlider/rangeSlider";
import { useDataRange, usePercent } from "@/hooks";

export default function WalletboxBodyStake() {
  const { dayRange, setDayRange } = useDataRange((dayRange) => ({
    dayRange: dayRange.dayRange,
    setDayRange: dayRange.setDayRange,
  }));

  const { percent, setPercent } = usePercent((percent) => ({
    percent: percent.percent,
    setPercent: percent.setPercent,
  }));

  return (
    <div id="stake" className="walletbox-body p-[20px] pt-[30px] w-full md:w-[400px]">
      <div className="flex justify-center mb-6 ">
        <div className="w-full flex justify-between items-center rounded-full bg-[#100f17] p-2">
          <div className="flex items-center">
            <img src="/image/qubic-logo-1.png" alt="" className="h-12 w-12" />
            <div className="pl-2">
              <div>0</div>
              <div>$0</div>
            </div>
          </div>
          <div className="w-1/2 items-end">
            <div>
              <br />
              Balance: 0
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-[95%] ml-[5%]">
        <div className="px-4">1</div>
        <RangeSlider min={0} max={100} initial={percent} type="percent" page={"stake"} />
        <div className="px-4">100%</div>
      </div>

      <div className="flex justify-center mb-6 mt-8">
        <div className="w-full flex justify-between items-center rounded-full bg-[#100f17] p-2">
          <div className="flex items-center">
            <img src="/image/qubic-logo-1.png" alt="" className="h-12 w-12" />
            <div className="pl-2">Days</div>
          </div>
          <div className="items-end mr-10">{dayRange}</div>
        </div>
      </div>
      
      <div className="flex justify-between w-[95%] ml-[5%]">
        <div className="px-4">3</div>
        <RangeSlider min={2} max={365} initial={dayRange} type="time" page={"stake"} />
        <div className="px-4">365</div>
      </div>

      <div className="w-[90%] flex justify-center items-center rounded-full bg-[#100f17] p-1 ml-[5%] mt-6">
        <div>Annual ROI at current rate: </div>
        <div className="pl-4">$10</div>
      </div>
    </div>
  );
}
