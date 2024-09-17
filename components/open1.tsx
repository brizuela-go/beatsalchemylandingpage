import type { NextPage } from "next";
import Open2 from "./open2";

export type Open1Type = {
  className?: string;
};

const Open1: NextPage<Open1Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start min-w-[229px] max-w-full text-left text-xl text-white font-inter ${className}`}
    >
      <Open2 />
    </div>
  );
};

export default Open1;
