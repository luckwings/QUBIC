import ConnectButton from "@/app/component/gadget/w3m";

export default function WalletboxFooterLocked() {
  return (
    <div className="walletbox-footer text-[18px]">
      <ConnectButton isSmall={false} />
      {/* <button className="w-full flex justify-center items-center border-solid border-2 border-[#822eda] rounded-full bg-black px-4 py-1">
        Connect Wallet
      </button> */}
    </div>
  );
}
