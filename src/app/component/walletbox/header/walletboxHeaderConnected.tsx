export default function WalletboxHeaderConnected() {
  return (
    <div className="flex justify-center rounded-t-[1.5rem] bg-[#272b3a] w-[80%] text-white pt-4 z-10">
      <div className="w-[200px] flex justify-between items-center rounded-full bg-[#100f17] px-4 py-2">
        <p>Stake</p>
        <div className="flex items-center">
          <img src="/image/qubic-logo-1.png" alt="" className="h-6 w-6" />
          <div className="ml-1">QUBIC</div>
        </div>
      </div>
    </div>
  );
}
