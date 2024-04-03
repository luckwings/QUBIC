export default function WalletboxBodyBallence() {
  return (
    <div className="walletbox-body w-full md:w-[400px]">
      <div className="flex justify-center mb-8">
        <div className="w-[80%] flex justify-between items-center rounded-full bg-[#111] px-4">
          <div className="text-xl font-bold">Your Rewards</div>
          <div className="flex relative -mr-4 items-center">
            <img
              src="/image/bnb.png"
              alt=""
              className="h-16 w-16 m-[5px]"
            />
          </div>
        </div>
      </div>

      <div className="items-center border-solid border-2 border-[#822EDA] rounded-[40px] bg-[#100f17] px-8 py-6">
        <div className="flex justify-between my-4">
          <p>BNB Rewards</p>
          <p className="text-[#090]">0.125</p>
        </div>
        <div className="flex justify-between my-4">
          <p>Total Staked</p>
          <p>5727257 QUBIC</p>
        </div>
        <div className="flex justify-between my-4">
          <p>APY</p>
          <p>135%</p>
        </div>
        <div className="flex justify-between my-4">
          <p>UNLOCK ON</p>
          <p>MARCH 20 2024 18:00</p>
        </div>
      </div>
    </div>
  );
}
