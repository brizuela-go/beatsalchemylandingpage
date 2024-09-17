import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent8Type = {
  className?: string;
  learnMore?: string;
  arrowSmRightSvgrepocom?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propBorder?: CSSProperties["border"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFontWeight?: CSSProperties["fontWeight"];
  propColor?: CSSProperties["color"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({
  className = "",
  propBackgroundColor,
  propHeight,
  propWidth,
  propBorder,
  propAlignSelf,
  learnMore,
  propFontWeight,
  propColor,
  propTextDecoration,
  propDisplay,
  propMinWidth,
  arrowSmRightSvgrepocom,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      height: propHeight,
      width: propWidth,
      border: propBorder,
      alignSelf: propAlignSelf,
    };
  }, [propBackgroundColor, propHeight, propWidth, propBorder, propAlignSelf]);

  const learnMoreStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      color: propColor,
      textDecoration: propTextDecoration,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [
    propFontWeight,
    propColor,
    propTextDecoration,
    propDisplay,
    propMinWidth,
  ]);

  return (
    <div
      className={`rounded-13xl-1 bg-crimson flex flex-row items-start justify-start py-[13.4px] px-[179px] gap-[7.4px] text-left text-sm text-white font-inter mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      style={frameDiv1Style}
    >
      <div className="relative font-semibold" style={learnMoreStyle}>
        {learnMore}
      </div>
      <img
        className="h-[18.7px] w-[23.3px] relative overflow-hidden shrink-0"
        alt=""
        src={arrowSmRightSvgrepocom}
      />
    </div>
  );
};

export default FrameComponent8;
