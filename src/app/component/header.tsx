import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center relative text-[20px]">
      <div className="flex justify-between px-10 py-4 items-center absolute z-10 top-0 w-full fixed md:bg-[#272b3a] text-white">
        <div className="flex items-center justify-start md:w-1/3">
          <img
            src="/image/qubic-project-logo.png"
            alt=""
            className="h-8 mr-4"
          />
          <div className="hidden md:flex items-center border-solid border-2 border-[#822EDA] rounded-full bg-black p-[1px]">
            <img src="/image/qubic-logo-1.png" alt="" className="h-8 w-8" />
            <button className="mx-2 text-[#999] font-semibold">BNB Chain</button>
          </div>
        </div>

        <div className="mr-4 md:hidden">
          <img src="/image/qubic-logo-1.png" alt="" className="h-8 w-8" />
        </div>

        <div className="lg:w-1/3">
          <div className="hidden lg:flex justify-center">
            <div className="px-4">Home</div>
            <div className="px-4">Stake</div>
            <div className="px-4">Docs</div>
            <div className="px-4">Support</div>
            <div className="px-4">About</div>
          </div>
        </div>

        {/* hidden when wallet is connected */}
        <div className="flex items-center justify-end md:w-1/3">
          <div className="mr-4 hidden md:flex">
            <img src="/image/qubic-logo-1.png" alt="" className="h-8 w-8" />
          </div>
          <button className="h-8 flex items-center border-solid border-2 border-[#822EDA] rounded-full bg-black px-4 text-[#999] font-semibold">
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="oval-header"></div>
    </div>
  );
}
