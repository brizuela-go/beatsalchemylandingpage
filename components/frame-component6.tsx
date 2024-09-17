import type { NextPage } from "next";
import FrameComponent8 from "./frame-component8";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[58.8px] pl-20 pr-[78px] box-border max-w-full text-left text-26xl text-darkslategray-100 font-abhaya-libre mq750:pb-[38px] mq750:box-border mq1150:pl-10 mq1150:pr-[39px] mq1150:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-center gap-[35.6px] max-w-full mq750:gap-[18px] mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[332px] max-w-full">
          <h1 className="m-0 relative text-inherit font-normal font-[inherit] mq1050:text-17xl mq450:text-8xl">
            <span>{`Meet Your Sound `}</span>
            <span className="text-crimson">Alchemist</span>
          </h1>
          <div className="w-[465px] h-[158px] relative text-xl leading-[26.3px] font-inter flex items-end max-w-full mq450:text-base mq450:leading-[21px]">
            <span className="w-full">
              <p className="m-0">
                Jamin Van Dillen brings decades of experience in the music
                industry and healing arts. His combined expertise ensures that
                each Beats Alchemy track is crafted to elevate the healing power
                of holistic therapies.
              </p>
              <p className="m-0">
                Jamin has journeyed from producing music for pop royalty to
                finding his place in helping others heal.
              </p>
            </span>
          </div>
          <FrameComponent8
            propBackgroundColor="#fff"
            propHeight="unset"
            propWidth="127.6px"
            propBorder="0.6px solid #000"
            propAlignSelf="unset"
            learnMore="Learn More"
            propFontWeight="unset"
            propColor="#393939"
            propTextDecoration="none"
            propDisplay="unset"
            propMinWidth="unset"
            arrowSmRightSvgrepocom="/arrowsmright-svgrepocom-1.svg"
          />
        </div>
        <img
          className="w-[445px] relative max-h-full max-w-full mq1050:flex-1"
          loading="lazy"
          alt=""
          src="/frame-63.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent6;
