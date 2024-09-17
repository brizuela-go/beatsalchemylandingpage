import type { NextPage } from "next";
import GroupComponent from "./group-component";
import FrameComponent8 from "./frame-component8";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[58.8px] pl-0.5 pr-0 box-border max-w-full text-left text-3xl-7 text-darkslategray-200 font-abhaya-libre ${className}`}
    >
      <div className="w-[951.6px] flex flex-row items-start justify-start gap-20 max-w-full mq750:gap-5 mq1050:gap-10 mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border min-w-[305px] max-w-full">
          <GroupComponent />
        </div>
        <div className="h-[266.5px] w-[403px] flex flex-col items-start justify-start gap-4 max-w-full text-21xl text-crimson mq750:min-w-full mq1050:flex-1">
          <h1 className="m-0 relative text-inherit font-normal font-[inherit] mq1050:text-13xl mq450:text-5xl">
            <span>name your price</span>
            <span className="text-darkslategray-100">
              {" "}
              and get access to all our tracks
            </span>
          </h1>
          <div className="w-[381px] relative text-xl leading-[26.3px] font-inter text-darkslategray-100 inline-block max-w-full mq450:text-base mq450:leading-[21px]">
            Experience enhanced focus, relaxation, and sleep with our curated
            binaural beats. Perfect for meditation, study, and stress relief
          </div>
          <FrameComponent8
            propBackgroundColor="#fc506a"
            propHeight="45.5px"
            propWidth="109.6px"
            propBorder="unset"
            propAlignSelf="unset"
            learnMore="Get now"
            propFontWeight="unset"
            propColor="#fff"
            propTextDecoration="none"
            propDisplay="unset"
            propMinWidth="unset"
            arrowSmRightSvgrepocom="/arrowsmright-svgrepocom-4.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
