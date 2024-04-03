export default function MobileButton() {
  return (
    <div className="flex md:hidden justify-center absolute bottom-2 px-1 w-full">
      <div className="oval z-5 -mt-[15px]"></div>
      <div className="flex rounded-full justify-between bg-[#272b3a] w-full text-white text-sm items-center p-6 z-10">
        <div>HH</div>
        <div>DOCS</div>
        <div>Stake</div>
        <div>About</div>
        <div>Support</div>
      </div>
    </div>
  );
}
