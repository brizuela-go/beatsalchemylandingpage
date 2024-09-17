import type { NextPage } from "next";

export type Closed3Type = {
  className?: string;
};

const Closed3: NextPage<Closed3Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[343.8px] w-[96.3px] flex flex-col items-start justify-start pt-[116.6px] px-[18px] pb-[16.9px] box-border relative gap-[16.3px] text-left text-xl text-white font-inter ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-12xl-3 bg-lightgray-200" />
      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-[17px] pr-[19px]">
        <div className="h-6 relative flex items-end [transform:_rotate(-90deg)] z-[1] mq450:text-base">
          Easy Integration
        </div>
      </div>
      <div className="self-stretch h-[60px] relative z-[1] text-2xl-8 text-darkslategray-100">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-whitesmoke-100" />
        <div className="absolute h-[43.83%] w-[40.17%] top-[28.17%] left-[31.17%] flex items-end min-w-[24.1px] z-[1] mq450:text-mid">
          01
        </div>
      </div>
    </div>
  );
};

export default Closed3;
