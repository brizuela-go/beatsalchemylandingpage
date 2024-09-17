import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[25.1px] text-left text-26xl text-darkslategray-100 font-abhaya-libre ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[83px] pr-[84px] mq750:pr-[21px] mq750:box-border mq1150:pl-[41px] mq1150:pr-[42px] mq1150:box-border">
        <h1 className="m-0 relative text-inherit font-bold font-[inherit] shrink-0 mq1050:text-17xl mq450:text-8xl">
          Align Inner Experiences with the External World
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start relative shrink-0 text-center text-22xl-9">
        <div className="relative whitespace-pre-wrap mq1050:text-15xl mq450:text-6xl">
          We all know that emotional states can shape experiences. However,
          maintaining a balanced state can be challenging in a fast-paced world
          of distractions.
        </div>
        <img
          className="w-[124.5px] h-[37.6px] absolute !m-[0] top-[4.2px] right-[376.9px] rounded-9xl-3 object-cover z-[1]"
          alt=""
          src="/rectangle-24-1@2x.png"
        />
        <img
          className="w-[75.1px] h-[37.6px] absolute !m-[0] right-[339.3px] bottom-[7.7px] rounded-6xl object-cover z-[1]"
          alt=""
          src="/rectangle-25-1@2x.png"
        />
        <img
          className="w-[46.8px] h-[46.8px] absolute !m-[0] bottom-[49px] left-[226.9px] rounded-[50%] object-cover z-[1]"
          alt=""
          src="/ellipse-2-2@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
