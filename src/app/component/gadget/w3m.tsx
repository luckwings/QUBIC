"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";

interface ConnectButtonProps {
  isSmall: boolean;
}

export default function ConnectButton({ isSmall }: ConnectButtonProps) {
  // 4. Use modal hook
  const { open } = useWeb3Modal();

  return (
    <>
      <button
        className={`${
          isSmall ? "" : "w-full justify-center"
        } flex h-8 items-center border-solid border-2 border-[#822eda] rounded-full bg-black px-4 text-[#999] font-semibold`}
        onClick={() => open()}
      >
        Connect Wallet
      </button>
      {/* <button onClick={() => open({ view: "Networks" })}>
        Open Network Modal
      </button> */}
    </>
  );
}
