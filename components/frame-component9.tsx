import type { NextPage } from "next";
import Image from "next/image";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent9Type = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propTextDecoration?: CSSProperties["textDecoration"];
};

const FrameComponent9: NextPage<FrameComponent9Type> = ({
  className = "",
  propFlex,
  propWidth,
  propDisplay,
  propTextDecoration,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const getStarted1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      textDecoration: propTextDecoration,
    };
  }, [propWidth, propDisplay, propTextDecoration]);

  return (
    <div
      className={`rounded-4xl-6 bg-white flex flex-row items-start justify-start pt-[9.9px] px-2.5 pb-[9.8px] gap-[6.9px] z-[2] text-left text-2xs-3 text-darkslategray-100 font-inter ${className}`}
      style={frameDivStyle}
    >
      <div
        className="w-[51px] relative inline-block shrink-0 whitespace-nowrap"
        style={getStarted1Style}
      >
        Get Started
      </div>
      <Image
        className="h-[13.7px] w-[17.1px] relative overflow-hidden shrink-0"
        alt=""
        src="/arrowsmright-svgrepocom.svg"
        width={17}
        height={14}
      />
    </div>
  );
};

export default FrameComponent9;
