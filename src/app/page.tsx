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
import WalletboxBodyStake from "./component/walletbox/body/walletboxBodyStake";
import WalletboxFooterStake from "./component/walletbox/footer/walletboxFooterStake";

export default function Home() {
  return (
    <div id="home" className="h-screen relative text-[16px] overflow-hidden">
      <Header />
      <main className="flex items-center h-screen relative w-full">
        <div className="m-auto w-full flex">
          <div className="lg:w-1/2 md:py-[200px] md:px-[60px]">
            <div className="text-6xl lg:text-7xl 2xl:text-8xl font-semibold mb-10 lg:mb-20 text-[#272b3a]">
              <p>Qubic Staking</p>
              <p>135% APY</p>
            </div>
            <div className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-10 lg:mb-20 text-[#272b3a]">
              <p>Stake QUBIC earn daily APY rewards paid in BNB</p>
            </div>
            <div className="flex text-[#999]">
              <button className="flex justify-center items-center border-solid border-2 border-[#ac5cff] rounded-full bg-black py-1 w-40 mr-8">
                STAKE
              </button>
              <button className="flex justify-center items-center border-solid border-2 border-[#ac5cff] rounded-full bg-black py-1 w-40">
                BUY QUBIC
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 hidden lg:grid content-center">
            <div className="pt-[100px] w-max">
              <div className="rotate-[40deg]">
                <div className="flex">
                  <div className="border-solid border-4 border-[#000] rounded-full p-4 w-max mr-[20px]">
                    <div className="border-solid border-[40px] border-[#822eda] rounded-full -rotate-[40deg]">
                      <Image
                        src="/image/bnb.png"
                        width={160}
                        height={160}
                        alt="bnb"
                      />
                    </div>
                  </div>
                  <div className="border-solid border-4 border-[#000] rounded-full p-4 w-max">
                    <div className="border-solid border-[40px] border-[#822eda] rounded-full -rotate-[40deg]">
                      <Image
                        src="/image/bnb.png"
                        width={160}
                        height={160}
                        alt="bnb"
                      />
                    </div>
                  </div>
                </div>
                <div className="border-solid border-4 border-[#000] rounded-full p-4 w-max ml-[150px] -mb-[20px]">
                  <div className="border-solid border-[40px] border-[#822eda] rounded-full -rotate-[40deg]">
                    <Image
                      src="/image/bnb.png"
                      width={160}
                      height={160}
                      alt="bnb"
                    />
                  </div>
                </div>
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
