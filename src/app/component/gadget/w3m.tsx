"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

import { usePageStore, useWalletStore } from "@/hooks";
import { useEffect } from "react";

interface ConnectButtonProps {
  isSmall: boolean;
}

export default function ConnectButton({ isSmall }: ConnectButtonProps) {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { walletState, setWalletState } = useWalletStore((wallet) => ({
    walletState: wallet.walletState,
    setWalletState: wallet.setWalletState,
  }));

  function ButtonLabel() {
    if (isConnecting) {
      return "Connecting…";
    }
    if (isDisconnected) {
      return "Connect Wallet";
    }
    if (address) {
      const strLength = address.length;
      const targetS = strLength - 5;
      const targetE = strLength - 1;
      const headline = address.substring(0, 4);
      const endline = address.substring(targetS, targetE);
      let newAddress = headline + "..." + endline;
      return <div>{newAddress}</div>;
    }
    return <div>Connect Wallet</div>;
  }

  const { open } = useWeb3Modal();

  useEffect(() => {
    if(address) {
      setWalletState("balance");
    } else {
      setWalletState("disConnected");
    }
  }, [address])

  return (
    <button
      className={`${
        isSmall ? "" : "w-full flex justify-center"
      } flex h-8 items-center border-solid border-2 border-[#822eda] rounded-full bg-black px-4 text-[#999] font-semibold`}
      onClick={() => open()}
    >
      {ButtonLabel()}
      {/* Connect Wallet */}
      {/* <button onClick={() => open({ view: "Networks" })}>
          Open Network Modal
        </button> */}
    </button>
  );
}
