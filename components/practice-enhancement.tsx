import type { NextPage } from "next";
import FrameComponent9 from "./frame-component9";
import Image from "next/image";

export type PracticeEnhancementType = {
  className?: string;
};

const PracticeEnhancement: NextPage<PracticeEnhancementType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[58.8px] pl-[113px] pr-28 box-border max-w-full text-left text-11xl text-darkslategray-100 font-abhaya-libre mq750:pl-7 mq750:pr-7 mq750:box-border mq450:pb-[38px] mq450:box-border mq1150:pl-14 mq1150:pr-14 mq1150:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start py-[60px] px-[31px] box-border relative max-w-full">
        <Image
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-11xl max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/enhancement-separator@2x.png"
          width={466}
          height={465}
        />
        <div className="w-[465.6px] [backdrop-filter:blur(31.3px)] rounded-mini bg-gray-600 border-white border-[0px] border-solid box-border flex flex-col items-start justify-start pt-[30px] pb-[31px] pl-7 pr-5 gap-[15px] max-w-full z-[1]">
          <img
            className="w-[465.6px] h-[214.4px] relative rounded-mini hidden max-w-full"
            alt=""
            src="/rectangle-66.svg"
          />
          <h3 className="m-0 w-[407.5px] relative text-inherit font-normal font-[inherit] flex items-end max-w-full z-[2] mq1050:text-5xl mq450:text-lg">
            <span className="w-full">
              <span>
                Are you ready to enhance your healing practice with customized
              </span>
              <span className="text-crimson"> binaural beats?</span>
            </span>
          </h3>
          <FrameComponent9 />
        </div>
      </div>
    </section>
  );
};

export default PracticeEnhancement;
