import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-[25px] text-center text-4xl text-darkslategray-100 font-abhaya-libre ${className}`}
    >
      {/* Heading Section */}
      <div className="self-stretch flex flex-row items-start justify-center py-4 px-10">
        <h1 className="m-0 text-inherit font-bold text-5xl leading-tight mq450:text-3xl">
          Align Inner Experiences with the External World
        </h1>
      </div>

      {/* Content Section */}
      <div className="relative self-stretch flex flex-col items-center justify-start text-lg leading-relaxed max-w-2xl mx-auto px-4">
        <p className="relative z-10">
          We all know that emotional{" "}
          <span className="relative">
            states
            <img
              className="w-[90px] h-[45px] absolute top-[0] -right-[80px] rounded-lg object-cover z-[-1]"
              alt=""
              src="/rectangle-24-1@2x.png"
            />
          </span>{" "}
          can shape experiences. However, maintaining a balanced state can be
          challenging in a fast-paced world{" "}
          <span className="relative">
            of distractions
            <img
              className="w-[60px] h-[40px] absolute bottom-[-5px] -right-[65px] rounded-lg object-cover z-[-1]"
              alt=""
              src="/rectangle-25-1@2x.png"
            />
          </span>
          .
        </p>
        <img
          className="w-[50px] h-[50px] absolute bottom-[-15px] left-[-50px] rounded-full object-cover"
          alt=""
          src="/ellipse-2-2@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
