import Image from "next/image";
import "./component/walletbox/wallet.css";

import Header from "./component/header";
import Footer from "./component/footer";
import MobileButton from "./component/mobileButton";
import WalletboxHeaderLocked from "./component/walletbox/header/walletboxHeaderLocked";
import WalletboxHeaderConnected from "./component/walletbox/header/walletboxHeaderConnected";
import WalletboxBodyLocked from "./component/walletbox/body/walletboxBodyLocked";
import WalletboxBodyBallence from "./component/walletbox/body/walletboxBodyBallence";
import WalletboxFooterLocked from "./component/walletbox/footer/walletboxFooterLocked";
import WalletboxFooterBallence from "./component/walletbox/footer/walletboxFooterBallence";
import WalletboxBodyBuy from "./component/walletbox/body/walletboxBodyBuy";
import WalletboxFooterBuy from "./component/walletbox/footer/walletboxFooterBuy";

export default function Home() {
  return (
    <div className="h-screen relative text-[16px]">
      <Header />
      <main className="flex items-center bg-[#13161e] h-screen relative w-full">
        <div className="m-auto w-full">
          {/* when only wallet locked */}
          {/* <div className="hidden md:flex w-[80%] mx-auto justify-center rounded-full bg-[#272b3a] text-white p-6 mb-10 text-3xl">
            Stake Qubic and earn high APY rewards
          </div> */}

          <div className="flex justify-center">
            <div className="w-full md:w-[400px] relative">
              <div className="flex absolute justify-center w-[20%] bg-[#1d202c] rounded-tr-2xl pt-2 pb-8 right-0 top-4">
                <img src="/image/qubic-logo-1.png" alt="" className="h-8 w-8" />
              </div>

              <div className="flex absolute justify-center text-white w-[20%] bg-[#1d202c] rounded-bl-2xl pb-2 pt-8 left-0 bottom-4">
                <div className="">Details</div>
              </div>

              <div className="flex">
                <div className="flex justify-center rounded-t-2xl bg-[#272b3a] text-white w-[80%] p-2">
                  {/* <WalletboxHeaderLocked /> */}
                  <WalletboxHeaderConnected />
                </div>

                <div className="w-[20%] relative flex">
                  {/* <div className="bg-[#1d202c] rounded-tr-2xl flex justify-center items-center w-full">
                    <img
                      src="/image/qubic-logo-1.png"
                      alt=""
                      className="h-8 w-8"
                    />
                  </div> */}
                  <div
                    id="curved-corner-bottomleft"
                    className="absolute bottom-0"
                  ></div>
                </div>
              </div>

              {/* <WalletboxBodyLocked /> */}
              <WalletboxBodyBallence />
              {/* <WalletboxBodyBuy /> */}

              <div className="flex relative justify-end z-10">
                <div className="w-[20%] relative flex z-5">
                  {/* <div className="bg-[#1d202c] rounded-bl-2xl left-0 flex justify-center text-white w-full">
                    <div className="w-full flex justify-center items-center py-1">
                      Details
                    </div>
                  </div> */}
                  <div
                    id="curved-corner-topright"
                    className="absolute top-0 right-0"
                  ></div>
                </div>

                {/* <WalletboxFooterLocked /> */}
                <WalletboxFooterBallence />
                {/* <WalletboxFooterBuy /> */}
              </div>
            </div>
          </div>
        </div>
        <MobileButton />
      </main>
      <Footer />
    </div>
  );
}
