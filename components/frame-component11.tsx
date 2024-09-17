import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent11Type = {
  className?: string;
  getStarted?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
};

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
  getStarted,
  propWidth,
  propDisplay,
}) => {
  const getStartedStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div
      className={`rounded-19xl-9 bg-crimson flex flex-row items-center justify-center pt-[11.9px] px-[23px] pb-3 gap-[23.9px] text-left text-base-3 text-white font-inter ${className}`}
    >
      <div
        className="relative font-medium whitespace-nowrap"
        style={getStartedStyle}
      >
        {getStarted}
      </div>
      <div className="flex flex-row items-center justify-start gap-px">
        <div className="h-1 w-0.5 relative rounded-4xs bg-white" />
        <div className="h-[11px] w-0.5 relative rounded-4xs bg-white" />
        <div className="h-[15px] w-0.5 relative rounded-4xs bg-white" />
        <div className="h-2.5 w-0.5 relative rounded-4xs bg-white" />
        <div className="h-1 w-0.5 relative rounded-4xs bg-white" />
        <div className="h-[9px] w-0.5 relative rounded-4xs bg-white" />
        <div className="h-[5px] w-0.5 relative rounded-4xs bg-white" />
        <div className="h-[15px] w-0.5 relative rounded-4xs bg-white" />
        <div className="h-5 w-0.5 relative rounded-4xs bg-white" />
        <div className="h-4 w-0.5 relative rounded-4xs bg-white" />
        <div className="h-[21px] w-0.5 relative rounded-4xs bg-white" />
        <div className="h-[11px] w-0.5 relative rounded-4xs bg-white" />
        <div className="h-2 w-0.5 relative rounded-4xs bg-white" />
        <div className="h-4 w-0.5 relative rounded-4xs bg-white" />
        <div className="h-1.5 w-0.5 relative rounded-4xs bg-white" />
        <div className="h-[15px] w-0.5 relative rounded-4xs bg-white" />
        <div className="h-[11px] w-0.5 relative rounded-4xs bg-white" />
      </div>
    </div>
  );
};

export default FrameComponent11;
