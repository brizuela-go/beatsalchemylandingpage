import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import TextInput from "./text-input";

export type TextFieldType = {
  className?: string;
  fullName?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const TextField: NextPage<TextFieldType> = ({
  className = "",
  fullName,
  propWidth,
}) => {
  const fullNameStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`self-stretch h-[73.3px] flex flex-col items-start justify-start gap-[7.5px] max-w-full text-left text-base-3 text-grey-500 font-inter ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[8.8px] max-w-full text-grey-900 mq450:flex-wrap">
        <div className="flex-1 flex flex-row items-start justify-start py-0 pl-0 pr-[243px] box-border gap-[8.8px] max-w-full mq450:flex-wrap mq450:pr-5 mq450:box-border">
          <div className="flex flex-row items-start justify-start gap-[4.4px]">
            <div
              className="w-[66px] relative tracking-[-0.17px] leading-[21.9px] font-medium inline-block shrink-0 whitespace-nowrap"
              style={fullNameStyle}
            >
              {fullName}
            </div>
            <div className="relative tracking-[-0.17px] leading-[21.9px] text-grey-500 hidden">
              (required)
            </div>
          </div>
          <div className="w-[63px] relative text-base-4 tracking-[-0.17px] leading-[21.9px] text-grey-500 inline-block shrink-0">
            (required)
          </div>
        </div>
        <div className="self-stretch w-[50.4px] flex flex-col items-end justify-start text-blue-600">
          <div className="hidden flex-row items-center justify-start gap-[2.2px]">
            <img
              className="h-[19.7px] w-[19.7px] relative"
              alt=""
              src="/icon-1.svg"
            />
            <div className="relative tracking-[-0.17px] leading-[21.9px] font-medium">
              Link
            </div>
            <img
              className="h-[17.5px] w-[17.5px] relative hidden"
              alt=""
              src="/iconexternal-linktinyblue.svg"
            />
          </div>
        </div>
      </div>
      <TextInput />
      <div className="self-stretch hidden flex-row items-start justify-start gap-[8.8px] max-w-full mq450:flex-wrap">
        <div className="h-[21.9px] flex-1 flex flex-col items-start justify-start gap-[8.8px] max-w-full">
          <div className="self-stretch hidden flex-row items-start justify-start">
            <div className="relative tracking-[-0.17px] leading-[21.9px]">
              Help text
            </div>
          </div>
          <div className="hidden flex-row items-center justify-start gap-[8.8px] text-red-600">
            <img
              className="h-[19.7px] w-[19.7px] relative"
              alt=""
              src="/icon-3.svg"
            />
            <div className="relative tracking-[-0.17px] leading-[21.9px]">
              Validation message
            </div>
          </div>
        </div>
        <div className="h-[21.9px] w-[42.7px] flex flex-col items-end justify-start text-right text-grey-700">
          <div className="w-[42.7px] h-[21.9px] relative hidden">
            <div className="absolute top-[0px] right-[-0.3px] tracking-[-0.17px] leading-[21.9px] inline-block min-w-[43px] w-full h-full">
              0/240
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextField;
