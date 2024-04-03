export default function WalletboxBodyLocked() {
  return (
    <div className="walletbox-body w-full md:w-[400px]">
      <div className="flex justify-center mb-4">
        <div className="w-[70%] flex justify-between items-center rounded-full bg-[#111] px-4">
          <div className="text-xl font-bold">
            Stack QUBIC
            <br />
            Earb BNB
          </div>
          <div className="flex relative -mr-4 items-center">
            <img
              src="/image/qubic-logo-1.png"
              alt=""
              className="-ml-5 absolute h-12 w-12"
            />
            <img
              src="/image/bnb.png"
              alt=""
              className="h-16 w-16 m-[5px]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-[100%] bg-[#100f17] rounded-xl py-10">
        <img src="/image/lock.png" alt="" className="h-[200px] w-[40%]" />
      </div>
    </div>
  );
}
