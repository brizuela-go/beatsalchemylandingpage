import type { NextPage } from "next";
import Closed3 from "./closed3";
import Closed2 from "./closed2";
import Open1 from "./open1";
import Closed1 from "./closed1";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: NextPage<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start gap-[25px] min-w-[465px] max-w-full text-left text-xl text-white font-inter mq750:flex-wrap mq750:min-w-full ${className}`}
    >
      <Closed3 />
      <Closed2 />
      <Open1 />
      <Closed1 />
    </div>
  );
};

export default FrameComponent10;
