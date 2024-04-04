import Image from "next/image";

import Header from "../component/header";
import Footer from "../component/footer";
import MobileButton from "../component/mobileButton";

export default function About() {
  return (
    <div className="h-screen relative text-[16px]">
      <Header />
      <main className="flex items-center bg-[#13161e] h-screen relative w-full">
        <div className="m-auto w-full">
            About
        </div>
        <MobileButton />
      </main>
      <Footer />
    </div>
  );
}
