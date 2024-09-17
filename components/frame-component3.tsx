import type { NextPage } from "next";
import FrameComponent10 from "./frame-component10";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[91.3px] pl-[69px] pr-[68px] box-border max-w-full text-left text-26xl text-darkslategray-100 font-abhaya-libre mq750:pb-[59px] mq750:box-border mq1150:pl-[34px] mq1150:pr-[34px] mq1150:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[168px] mq750:pl-[42px] mq750:pr-[42px] mq750:box-border mq1050:pl-[84px] mq1050:pr-[84px] mq1050:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <h1 className="m-0 relative text-inherit font-normal font-[inherit] mq1050:text-17xl mq450:text-8xl">
            Create New Realities for Your Clients
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24.9px] max-w-full text-xl text-white font-inter mq1050:flex-wrap">
          <FrameComponent10 />
          <div className="w-[270.6px] flex flex-row items-start justify-start py-[22.5px] px-[22px] box-border relative text-11xl-4 text-darkslategray-100 mq1050:flex-1">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-12xl-3 max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-30@2x.png"
            />
            <div className="flex-1 [backdrop-filter:blur(6.3px)] rounded-12xl-3 bg-whitesmoke-200 flex flex-col items-start justify-start pt-[13.8px] pb-[14.7px] pl-3 pr-[7px] gap-[16.9px] z-[1]">
              <div className="w-[225.6px] h-[298.8px] relative [backdrop-filter:blur(6.3px)] rounded-12xl-3 bg-whitesmoke-200 hidden" />
              <div className="w-[79.3px] h-[79.3px] relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke-100 w-full h-full z-[2]" />
                <div className="absolute top-[21.5px] left-[21.1px] flex items-end w-[38px] h-9 min-w-[38px] z-[3] mq1050:text-5xl mq450:text-lg">
                  05
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[7px] pl-2 pr-px text-xl text-white">
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="w-[168.5px] relative flex items-end z-[1] mq450:text-base">
                    Ready to Elevate Your Mind?
                  </div>
                  <div className="relative text-smi-5 z-[1]">
                    Join us in creating a harmonious future with the power of
                    sound. Contact us to get started!
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[26px] pr-[33px] text-base-1">
                <div className="flex-1 rounded-17xl-8 bg-white flex flex-row items-start justify-start py-[15.4px] px-4 gap-[10.7px] z-[1]">
                  <div className="flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0">
                    <div className="w-[78px] relative inline-block whitespace-nowrap">
                      Get Started
                    </div>
                  </div>
                  <img
                    className="h-[21.4px] w-[26.8px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/arrowsmright-svgrepocom-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
