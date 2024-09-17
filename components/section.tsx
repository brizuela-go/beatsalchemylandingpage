import type { NextPage } from "next";

export type SectionType = {
  className?: string;
};

const Section: NextPage<SectionType> = ({ className = "" }) => {
  return (
    <section
      className={`mr-[-225.4px] mb-[68px] w-[1600px] h-[620px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[35.8px] px-[200px] pb-[521.2px] box-border gap-[32.8px] max-w-[140%] text-left text-34xl-3 text-darkslategray-100 font-abhaya-libre mq750:gap-4 mq750:pt-5 mq750:px-[100px] mq750:pb-[220px] mq750:box-border mq450:h-auto mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[363px] shrink-0 mq750:pl-[181px] mq750:pr-[181px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <b className="relative shrink-0 mq1050:text-24xl mq450:text-13xl">
          <span>{`What Our `}</span>
          <span className="text-crimson">Clients</span>
          <span> Say</span>
        </b>
      </div>
      <div className="self-stretch h-[655.4px] relative shrink-0 max-w-full text-xl text-dimgray-200 font-inter mq450:h-auto mq450:min-h-[655.3999999999996]">
        <div className="absolute top-[0px] left-[427.7px] rounded-21xl [background:radial-gradient(50%_50%_at_50%_50%,_#ffefef_38%,_#f1edeb_67%)] w-[344.2px] flex flex-row items-center justify-center max-w-full">
          <div className="flex-1 flex flex-col items-center justify-center py-[30px] pl-[27px] pr-[26px] box-border gap-[32.3px] max-w-full">
            <div className="relative leading-[30px] font-semibold whitespace-pre-wrap mq450:text-base mq450:leading-[24px]">
              AMAZING meditation music and custom mixing for guided
              visualizations in my holistic healing courses and classes. The
              sound frequencies add a powerful multidimensional element to the
              soul alchemy work I do.
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[37px] gap-2.5 font-manrope mq450:flex-wrap">
              <img
                className="h-12 w-12 relative rounded-29xl object-cover"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <div className="flex flex-col items-start justify-start py-0 px-0">
                <div className="relative leading-[20px] font-semibold whitespace-nowrap mq450:text-base mq450:leading-[16px]">
                  Giselle Jennaway
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[159.8px] left-[-508.3px] w-[2217px] h-[495.6px] flex flex-row items-start justify-start">
          <div className="h-[351.3px] w-[1295px] !m-[0] absolute top-[-71.3px] right-[460.8px] flex flex-row items-start justify-start gap-[499.9px] max-w-full z-[1]">
            <img
              className="h-[351.3px] w-[400.8px] rounded-21xl object-contain max-w-full"
              loading="lazy"
              alt=""
              src="/background@2x.png"
            />
            <img
              className="h-[325.1px] w-[394.3px] !m-[0] absolute top-[0px] right-[0px] rounded-21xl object-contain"
              alt=""
              src="/background-1@2x.png"
            />
          </div>
          <div className="self-stretch w-[1200px] overflow-x-auto shrink-0 flex flex-row items-end justify-start gap-[39px] max-w-full z-[2]">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-[450px] box-border max-w-full">
              <img
                className="w-[481.5px] flex-1 rounded-21xl max-h-full object-contain"
                alt=""
                src="/background-2@2x.png"
              />
            </div>
            <div className="h-[235.1px] flex flex-col items-start justify-start">
              <img
                className="w-[60px] h-10 relative rounded-21xl z-[3]"
                loading="lazy"
                alt=""
                src="/border.svg"
              />
            </div>
            <div className="h-[217.1px] flex flex-col items-start justify-start">
              <div className="w-[76px] rounded-xl bg-lightgray-100 flex flex-row items-start justify-start z-[3]">
                <div className="h-1 w-[15.2px] relative rounded-xl bg-dimgray-200" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 pb-[195px] pl-0 pr-[450px]">
              <img
                className="w-[60px] h-10 relative rounded-21xl z-[3]"
                alt=""
                src="/border-1.svg"
              />
            </div>
            <img
              className="h-[495.6px] w-[481.5px] rounded-21xl shrink-0 object-contain"
              alt=""
              src="/background-3@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
