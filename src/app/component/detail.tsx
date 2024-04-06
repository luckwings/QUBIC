import { usePageStore } from "@/hooks";

export default function Detail() {
  const setPageState = usePageStore((state) => state.setPageState);

  return (
    <div className="flex justify-center m-auto w-full text-xl">
      <div className="w-full md:w-[400px] relative">
        <div className="flex absolute justify-center w-[20%] bg-[#1d202c] rounded-tr-2xl pt-2 pb-8 right-0 top-4 text-white text-2xl">
          X
        </div>

        <div className="flex">
          <div className="flex rounded-t-2xl bg-[#272b3a] text-white w-[80%] pt-4 px-4 pb-2">
            <div className="flex justify-center border-solid border-2 border-[#ac5cff] rounded-full bg-[#100f17] text-white w-full px-4 ml-4">
              Details
            </div>
          </div>

          <button
            className="w-[20%] relative flex"
            onClick={() => setPageState("stake")}
          >
            <div
              id="curved-corner-bottomleft"
              className="absolute bottom-0"
            ></div>
          </button>
        </div>

        <div className="rounded-tr-2xl rounded-b-2xl bg-[#272b3a] text-white w-full md:w-[400px] p-4 relative">
          <div className="grid gap-2 w-[100%] bg-[#100f17] border-solid border-2 border-[#ac5cff] rounded-[20px] p-6">
            <div>APY: 135%</div>
            <div>Total staked: 10,528,765 QUBIC</div>
            <div>Ends in: 87 days</div>
            <a className="text-[#822EDA]">See Token Info</a>
            <a className="text-[#822EDA]">View Project Site</a>
            <a className="text-[#822EDA]">View Contract</a>
          </div>
        </div>
      </div>
    </div>
  );
}
