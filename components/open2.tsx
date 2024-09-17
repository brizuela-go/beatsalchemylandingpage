import type { NextPage } from "next";

export type Open2Type = {
  className?: string;
};

const Open2: NextPage<Open2Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start pt-[249.4px] pb-[25.4px] pl-[30px] pr-[29px] box-border relative max-w-full text-left text-xl text-white font-inter ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-18xl-5 max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/rectangle-27@2x.png"
      />
      <div className="flex-1 flex flex-row items-start justify-start gap-[12.4px] z-[1] mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[139px]">
          <div className="w-[146px] relative flex items-end whitespace-nowrap mq450:text-base">
            Trusted Expertise
          </div>
          <div className="self-stretch h-[45px] relative text-smi-5 lowercase flex items-end">
            All Beats Alchemy outputs are developed by industry veterans with a
            deep understanding of music and healing.
          </div>
        </div>
        <div className="h-[66.3px] w-[66.3px] relative text-6xl-4 text-darkslategray-100">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-whitesmoke-100" />
          <div className="absolute h-[45.25%] w-[49.77%] top-[27.15%] left-[27.15%] flex items-end min-w-[33px] z-[1] mq450:text-xl">
            03
          </div>
        </div>
      </div>
    </div>
  );
};

export default Open2;
