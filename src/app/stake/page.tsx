"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import "../component/walletbox/wallet.css";

import Header from "../component/header";
import Footer from "../component/footer";
import MobileButton from "../component/mobileButton";
import WalletboxHeaderLocked from "../component/walletbox/header/walletboxHeaderLocked";
import WalletboxHeaderConnected from "../component/walletbox/header/walletboxHeaderConnected";
import WalletboxBodyLocked from "../component/walletbox/body/walletboxBodyLocked";
import WalletboxBodyBallence from "../component/walletbox/body/walletboxBodyBallence";
import WalletboxFooterLocked from "../component/walletbox/footer/walletboxFooterLocked";
import WalletboxFooterBallence from "../component/walletbox/footer/walletboxFooterBallence";
import WalletboxBodyBuy from "../component/walletbox/body/walletboxBodyBuy";
import WalletboxFooterBuy from "../component/walletbox/footer/walletboxFooterBuy";

import Calculator from "../component/calculator";
import Detail from "../component/detail";

import { usePageStore } from "../../hooks";

export default function Stake() {
  const pageState = usePageStore((state) => state.pageState);
  const setPageState = usePageStore((state) => state.setPageState);

  return (
    <div className="h-screen relative text-[16px] overflow-hidden">
      <Header />
      <main className="flex items-center bg-[#13161e] h-screen relative w-full">
        {pageState === "stake" ? (
          <div className="m-auto w-full">
            {/* when only wallet locked */}
            <div className="hidden md:flex w-[80%] mx-auto justify-center rounded-full bg-[#272b3a] text-white p-6 mb-10 text-3xl">
              Stake Qubic and earn high APY rewards
            </div>

            {/* <Calculator /> */}

            <div className="flex justify-center">
              <div className="w-full md:w-[400px] relative">
                <div className="flex absolute justify-center w-[15%] bg-[#1d202c] rounded-tr-2xl pt-2 pb-8 right-0 top-4">
                  <img
                    src="/image/qubic-logo-1.png"
                    alt=""
                    className="h-8 w-8"
                  />
                </div>

                <div className="flex absolute justify-center text-white w-[15%] bg-[#1d202c] rounded-bl-2xl pb-2 pt-8 left-0 bottom-4">
                  <div className="">Details</div>
                </div>

                <div className="flex">
                  <div className="flex justify-center rounded-t-2xl bg-[#272b3a] w-[85%] text-white pt-4">
                    {/* <WalletboxHeaderLocked /> */}
                    <WalletboxHeaderConnected />
                  </div>

                  <button
                    className="w-[15%] relative flex"
                    onClick={() => setPageState("calculate")}
                  >
                    <div
                      id="curved-corner-bottomleft"
                      className="absolute bottom-0"
                    ></div>
                  </button>
                </div>

                {/* <WalletboxBodyLocked /> */}
                <WalletboxBodyBallence />
                {/* <WalletboxBodyBuy /> */}

                <div className="flex relative justify-start z-10">
                  <button
                    className="w-[15%] relative flex z-5"
                    onClick={() => setPageState("detail")}
                  >
                    <div
                      id="curved-corner-topright"
                      className="absolute top-0 right-0"
                    ></div>
                  </button>

                  {/* <WalletboxFooterLocked /> */}
                  <WalletboxFooterBallence />
                  {/* <WalletboxFooterBuy /> */}
                </div>
              </div>
            </div>
          </div>
        ) : pageState === "detail" ? (
          <Detail />
        ) : (
          pageState === "calculate" && <Calculator />
        )}

        <MobileButton />
      </main>
      <Footer />
    </div>
  );
}
