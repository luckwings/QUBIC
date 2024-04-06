import Image from "next/image";

import Header from "../component/layout/header";
import Footer from "../component/layout/footer";
import MobileButton from "../component/layout/mobileButton";

export default function Docs() {
  return (
    <div className="h-screen relative text-[16px]">
      <Header />
      <main className="flex items-center bg-[#13161e] h-screen relative w-full">
        <div className="m-auto w-full">
            Docs
        </div>
        <MobileButton />
      </main>
      <Footer />
    </div>
  );
}
