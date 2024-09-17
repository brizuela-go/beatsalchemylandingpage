import type { NextPage } from "next";
import FrameComponent8 from "./frame-component8";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[66.2px] pl-[77px] pr-[75px] box-border max-w-full text-center text-26xl text-crimson font-abhaya-libre mq1050:pb-[43px] mq1050:box-border mq450:pb-7 mq450:box-border mq1150:pl-[38px] mq1150:pr-[37px] mq1150:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[37.5px] max-w-full mq750:gap-[19px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[150px] pr-[149px] box-border max-w-full mq750:pl-[37px] mq750:pr-[37px] mq750:box-border mq1050:pl-[75px] mq1050:pr-[74px] mq1050:box-border">
          <h1 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] inline-block max-w-full mq1050:text-17xl mq450:text-8xl">
            <span>Binaural Beats</span>
            <span className="text-darkslategray-100">
              : Alter Your Brainwaves toan Amplified State
            </span>
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-left text-11xl text-white">
          <div className="self-stretch flex flex-row items-end justify-between pt-[303.7px] pb-[26.3px] pl-[41px] pr-[42px] box-border relative max-w-full gap-5 mq1050:flex-wrap mq1050:justify-center mq1050:pr-[21px] mq1050:box-border mq450:pt-[197px] mq450:pb-5 mq450:box-border">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-40@2x.png"
            />
            <h3 className="m-0 w-[566px] relative text-inherit font-normal font-[inherit] flex items-end shrink-0 max-w-full z-[1] mq1050:text-5xl mq450:text-lg">
              Personalized Sound Frequency to Achieve Peak States and Fuel
              Dreams
            </h3>
            <div className="w-[127.6px] flex flex-col items-start justify-end pt-0 px-0 pb-[12.2px] box-border">
              <FrameComponent8
                propBackgroundColor="#fff"
                propHeight="45.5px"
                propWidth="unset"
                propBorder="0.6px solid #000"
                propAlignSelf="stretch"
                learnMore="Learn More"
                propFontWeight="unset"
                propColor="#393939"
                propTextDecoration="none"
                propDisplay="unset"
                propMinWidth="unset"
                arrowSmRightSvgrepocom="/arrowsmright-svgrepocom-1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0.5 box-border max-w-full text-xl text-dimgray-100 font-inter">
            <div className="flex-1 flex flex-row items-start justify-start gap-[75px] max-w-full mq750:gap-[19px] mq1050:gap-[37px] mq1050:flex-wrap">
              <div className="h-[143.8px] flex-1 relative leading-[26.3px] inline-block min-w-[386px] max-w-full mq750:min-w-full mq450:text-base mq450:leading-[21px]">{`To achieve a higher state of being, we must absorb higher frequencies. Binaural Beats attune your brain to specific states like love, focus, or creativity. This evidence-based method is rooted in ancient practices. Indigenous cultures have always known that specific frequencies, like drumming, tapping or chanting, can unlock new states. `}</div>
              <div className="h-[131.3px] w-[325.6px] flex flex-row items-start justify-start gap-[25px] max-w-full text-mini text-darkslategray-100 mq1050:flex-1 mq450:flex-wrap">
                <div className="self-stretch w-[2.5px] relative rounded-8xs bg-gray-200 mq450:w-full mq450:h-[2.5px]" />
                <div className="h-[126.3px] flex-1 relative leading-[18.8px] inline-block">
                  While traditional methods take time and experience,
                  pre-recorded and mixed beats are more accessible, efficient,
                  and just as effective. Research shows that brain entrainment
                  can significantly improve your mental state, helping you sleep
                  easier, manage stress, gain greater focus, and perform better.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
