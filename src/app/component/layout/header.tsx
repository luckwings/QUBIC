import ConnectButton from "@/app/component/gadget/w3m";

export default function Header() {
  return (
    <div className="flex justify-center relative text-[20px]">
      <div className="flex justify-between px-10 py-4 items-center absolute z-10 top-0 w-full fixed md:bg-[#272b3a] text-white">
        <div className="flex items-center justify-start lg:w-1/3">
          <img
            src="/image/qubic-project-logo.png"
            alt=""
            className="h-8 mr-4"
          />
          <div className="hidden lg:flex items-center border-solid border-2 border-[#822eda] rounded-full bg-black p-[1px]">
            <img src="/image/qubic-logo-1.png" alt="" className="h-8 w-8" />
            <button className="mx-2 text-[#999] font-semibold">
              BNB Chain
            </button>
          </div>
        </div>

        <div className="mr-4 md:hidden">
          <img src="/image/qubic-logo-1.png" alt="" className="h-8 w-8" />
        </div>

        <div className="lg:w-1/3">
          <div className="hidden md:flex justify-center">
            <a href="./" className="px-4">
              Home
            </a>
            <a href="./stake" className="px-4">
              Stake
            </a>
            <a href="./docs" className="px-4">
              Docs
            </a>
            <a href="./support" className="px-4">
              Support
            </a>
            <a href="./about" className="px-4">
              About
            </a>
          </div>
        </div>

        {/* hidden when wallet is connected */}
        <div className="flex items-center justify-end lg:w-1/3">
          <div className="mr-4 hidden lg:flex">
            <img src="/image/qubic-logo-1.png" alt="" className="h-8 w-8" />
          </div>
          <ConnectButton isSmall={true} />
          {/* <button className="h-8 flex items-center border-solid border-2 border-[#822eda] rounded-full bg-black px-4 text-[#999] font-semibold">
            Connect Wallet
          </button> */}
        </div>
      </div>
      <div className="oval-header"></div>
    </div>
  );
}
