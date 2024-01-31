import daisyui from "daisyui";

export default function (props) {
  return (
    <div
      className="w-[1100px] h-[500px] bg-gray-900 bg-opacity-40 rounded-xl items-start justify-end flex flex-col"
      style={{
        backgroundImage: `url(${props.cover})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[598px] h-[252px] p-10 bg-white rounded-xl shadow border border-gray-200 flex-col items-end justify-end gap-6 flex">
        <div className="self-stretch h-[124px] flex-col justify-end items-end gap-4 flex">
          <div className="px-2.5 py-1 bg-indigo-500 rounded-md justify-start items-start gap-1 inline-flex">
            <div className="text-white text-sm font-medium font-['Work Sans'] leading-tight">
              {props.tags}
            </div>
          </div>
          <div className="self-stretch text-gray-900 text-4xl font-semibold font-['Work Sans'] leading-10">
            Grid system for better Design User Interface
          </div>
        </div>
        <div className="justify-start items-center gap-5 inline-flex">
          <div className="text-neutral-400 text-base font-normal font-['Work Sans'] leading-normal">
            August 20, 2022
          </div>
        </div>
      </div>
    </div>
  );
}
