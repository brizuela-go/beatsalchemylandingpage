import type { NextPage } from "next";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[206.5px] relative text-left text-3xl-7 text-darkslategray-200 font-abhaya-libre ${className}`}
    >
      <img
        className="absolute h-[76.46%] w-[32.29%] top-[11.77%] right-[0%] bottom-[11.77%] left-[67.71%] max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/frame-53.svg"
      />
      <div className="absolute h-[76.32%] w-[32.22%] top-[11.82%] right-[67.78%] bottom-[11.86%] left-[0%] flex flex-row items-start justify-end pt-[89.7px] px-2 pb-[11.3px] box-border">
        <img
          className="self-stretch w-full absolute !m-[0] h-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xl-7 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/right-image@2x.png"
        />
        <div className="h-[61px] hidden flex-col items-start justify-start gap-[3.8px] z-[1]">
          <div className="relative leading-[22.7px] mq450:text-lg mq450:leading-[18px]">
            Anxiety Mix
          </div>
          <div className="relative text-3xs-4 font-inter text-gray-300">
            12 tracks
          </div>
        </div>
        <img
          className="h-[56.6px] w-[56.6px] relative z-[1]"
          alt=""
          src="/group-3.svg"
        />
      </div>
      <div className="absolute h-full w-[42.21%] top-[0%] right-[28.94%] bottom-[0%] left-[28.85%] flex flex-row items-start justify-end pt-[117.5px] px-[11px] pb-[14.8px] box-border z-[2] text-10xl-7">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[-1.2px] bottom-[0px]">
          <img
            className="absolute top-[0px] left-[0.4px] rounded-10xl-7 w-full h-full object-cover"
            alt=""
            src="/rectangle-7-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] rounded-10xl-7 w-[199.4px] h-[206.5px] object-cover z-[1]"
            alt=""
            src="/images@2x.png"
          />
        </div>
        <div className="h-20 w-[121.2px] hidden flex-col items-start justify-start gap-[4.9px] z-[1]">
          <div className="relative leading-[29.7px] mq450:text-5xl mq450:leading-[24px]">
            Heart Break
          </div>
          <div className="relative text-smi-4 font-inter text-gray-300">
            12 tracks
          </div>
        </div>
        <img
          className="h-[74.2px] w-[74.2px] relative z-[2]"
          alt=""
          src="/group-3-1.svg"
        />
      </div>
    </div>
  );
};

export default GroupComponent;
