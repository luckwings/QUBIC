import RangeSlider from "../../rangeSlider/rangeSlider";

export default function WalletboxBodyBuy() {
  return (
    <div className="walletbox-body w-full md:w-[400px]">
      <div className="flex justify-center mb-6 ">
        <div className="w-full flex justify-between items-center rounded-full bg-[#111] p-2">
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

      <div className="flex justify-between">
        <div className="px-4">1</div>
        <RangeSlider min={0} max={100} type="null" />
        <div className="px-4">100%</div>
      </div>

      <div className="flex justify-center mb-6 mt-8">
        <div className="w-full flex justify-between items-center rounded-full bg-[#111] p-2">
          <div className="flex items-center">
            <img src="/image/qubic-logo-1.png" alt="" className="h-12 w-12" />
            <div className="pl-2">Days</div>
          </div>
          <div className="items-end mr-10">250</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="px-4">3</div>
        <RangeSlider min={2} max={365} type="null" />
        <div className="px-4">365</div>
      </div>

      <div className="w-full flex justify-center items-center rounded-full bg-[#111] p-1 mt-8">
        <div>Annual ROI at current rate: </div>
        <div className="pl-4">$10</div>
      </div>
    </div>
  );
}