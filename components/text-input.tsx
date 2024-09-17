import type { NextPage } from "next";

export type TextInputType = {
  className?: string;
};

const TextInput: NextPage<TextInputType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-6xs-6 bg-white border-grey-300 border-[1.1px] border-solid box-border flex flex-row items-center justify-start max-w-full text-left text-base-3 text-grey-500 font-inter ${className}`}
    >
      <div className="h-[43.8px] flex-1 shadow-[0px_2.2px_0px_rgba(231,_235,_238,_0.2)_inset] flex flex-row items-center justify-start py-[11px] px-[13px] box-border gap-[11px] max-w-full">
        <div className="relative tracking-[-0.17px] leading-[21.9px] hidden">
          Placeholder text
        </div>
        <div className="relative tracking-[-0.17px] leading-[21.9px] text-grey-700 hidden">
          Text
        </div>
      </div>
      <div className="rounded-tl-none rounded-tr-[6.58px] rounded-br-[6.58px] rounded-bl-none hidden flex-row items-center justify-start py-0 pl-0 pr-2 gap-[8.8px]">
        <div className="w-[1.1px] relative bg-grey-300" />
        <img
          className="h-[26.3px] w-[26.3px] relative"
          alt=""
          src="/icon-2.svg"
        />
      </div>
    </div>
  );
};

export default TextInput;
