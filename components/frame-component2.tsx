import type { NextPage } from "next";
import FrameComponent11 from "./frame-component11";
import FrameComponent8 from "./frame-component8";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-[17px] box-border max-w-full text-left text-11xl text-darkslategray-100 font-abhaya-libre ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-center py-0 px-0 box-border gap-[41.9px] max-w-full mq750:gap-[21px] mq1050:flex-wrap">
        <img
          className="w-[461.7px] relative rounded-smi-5 max-h-full object-contain max-w-full mq1050:flex-1"
          loading="lazy"
          alt=""
          src="/rectangle-23@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[347px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
            <h3 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] mq1050:text-5xl mq450:text-lg">
              Access Peak Performance and Creativity
            </h3>
            <div className="h-[157.5px] relative text-xl leading-[26.3px] font-inter inline-block shrink-0 mq450:text-base mq450:leading-[21px]">
              <p className="m-0">
                Our binaural beat recordings and mixes allow you and your
                clients to choose and access an optimal state of mind.
              </p>
              <p className="m-0">
                <span className="text-darkslategray-100">{`For those striving to exist at a high level, `}</span>
                <span className="text-crimson">Beats Alchemy</span>
                <span>
                  {" "}
                  offers a unique blend of ancient wisdom and modern technology.
                  Our customized sound frequencies help align your inner and
                  outer worlds, making the timeless truth
                </span>
              </p>
            </div>
          </div>
          <div className="w-[345.9px] flex flex-row items-center justify-center gap-[22.5px] max-w-full text-mini font-inter mq750:flex-wrap">
            <div className="h-[50px] rounded-15xl-4 bg-white border-darkslategray-100 border-[0.6px] border-solid box-border hidden flex-row items-center justify-start py-1 pl-[15px] pr-1.5 gap-[7.5px]">
              <div className="relative">Sample Our Sounds</div>
              <div className="flex flex-row items-center justify-start relative gap-[6.3px]">
                <div className="relative rounded-[50%] bg-crimson z-[0]" />
                <img
                  className="h-[43.75%] w-[14.4px] absolute !m-[0] top-[29.75%] bottom-[26.5%] left-[15px] max-h-full z-[1]"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <FrameComponent11 getStarted="Get started" />
            <FrameComponent8
              propBackgroundColor="#fff"
              propHeight="45.5px"
              propWidth="127.6px"
              propBorder="0.6px solid #000"
              propAlignSelf="unset"
              learnMore="Learn More"
              propFontWeight="unset"
              propColor="#393939"
              propTextDecoration="none"
              propDisplay="inline-block"
              propMinWidth="68px"
              arrowSmRightSvgrepocom="/arrowsmright-svgrepocom-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
