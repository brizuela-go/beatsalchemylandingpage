import type { NextPage } from "next";
import TextField from "./text-field";
import FrameComponent8 from "./frame-component8";

export type ContactFormType = {
  className?: string;
};

const ContactForm: NextPage<ContactFormType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-0.5 pr-0 box-border max-w-full text-left text-22xl-3 text-darkslategray-100 font-abhaya-libre ${className}`}
    >
      <div className="w-[977.1px] flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
        <div className="w-[455px] flex flex-col items-start justify-start gap-[13.7px] max-w-full mq750:min-w-full mq1050:flex-1">
          <b className="relative tracking-[-0.23px] leading-[30.2px] mq1050:text-14xl mq1050:leading-[24px] mq450:text-6xl mq450:leading-[18px]">
            Contact Us
          </b>
          <div className="self-stretch h-[91px] relative text-xl-6 tracking-[-0.23px] leading-[30.2px] font-inter flex items-center mq450:text-base mq450:leading-[24px]">
            <span>
              <p className="m-0">
                Thanks for checking out what we do at Beats Alchemy.
              </p>
              <p className="m-0">
                {" "}
                Please fill out the contact form below to ask a question or
                request your custom meditation tracks.
              </p>
            </span>
          </div>
        </div>
        <div className="w-[438.8px] flex flex-col items-start justify-start gap-[20.1px] max-w-full text-base-4 text-grey-500 font-inter mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
            <TextField fullName="Full Name" />
            <TextField fullName="Email Adress" propWidth="85px" />
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.8px] box-border max-w-full text-grey-900">
              <div className="flex-1 flex flex-row items-start justify-start gap-[8.8px] max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[246px] max-w-full">
                  <div className="flex flex-row items-start justify-start">
                    <div className="w-[93px] relative tracking-[-0.17px] leading-[21.9px] font-medium inline-block shrink-0 whitespace-nowrap">
                      Your Message
                    </div>
                  </div>
                </div>
                <div className="h-[21.9px] w-[50.5px] flex flex-col items-end justify-start text-blue-600">
                  <div className="hidden flex-row items-center justify-start gap-[2.2px]">
                    <img
                      className="h-[19.7px] w-[19.7px] relative"
                      alt=""
                      src="/icon-7.svg"
                    />
                    <div className="relative tracking-[-0.17px] leading-[21.9px] font-medium">
                      Link
                    </div>
                    <img
                      className="h-[17.5px] w-[17.5px] relative hidden"
                      alt=""
                      src="/iconexternal-linktinyblue1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[0px_2.2px_0px_rgba(231,_235,_238,_0.2)_inset] rounded-6xs-6 bg-white border-grey-300 border-[1.1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-[9px] pb-0 pl-[13px] pr-0 gap-[80.5px] max-w-full mq450:gap-10">
              <div className="w-[409px] relative tracking-[-0.17px] leading-[21.9px] flex items-center max-w-full">
                Start Typing ...
              </div>
              <div className="w-[196.3px] hidden flex-col items-start justify-start py-[11px] px-0 box-border">
                <div className="relative tracking-[-0.17px] leading-[21.9px] hidden">
                  Default value
                </div>
              </div>
              <div className="w-[425.8px] flex flex-row items-start justify-end">
                <img
                  className="h-[18.4px] w-[17.5px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/text-field-elements--resize-handle.svg"
                />
              </div>
            </div>
          </div>
          <FrameComponent8
            learnMore="Submit"
            arrowSmRightSvgrepocom="/arrowsmright-svgrepocom-10.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
