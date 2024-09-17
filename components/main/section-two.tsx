import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionTwo: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Image
          height={500}
          width={500}
          className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
          src="/section2.jpg"
          alt="woman meditating"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-semibold text-[#393939]">
            Access Peak Performance and
            <br />
            <span className="text-[#fc5169]">Creativity</span>
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg ">
            Our binaural beat recordings help you and your clients achieve an
            optimal state of mind. Beats Alchemy combines ancient wisdom with
            modern technology to align your inner and outer worlds, offering
            customized sound frequencies for those aiming to thrive.
          </p>
          <Link className="no-underline group " href={"/beats"}>
            <button
              className="mt-8 px-6 py-3 cursor-pointer  bg-[#FC506A] text-white rounded-3xl hover:bg-[#fd3a57] transition flex justify-center items-center gap-2 duration-200 ease-in-out font-medium
          "
            >
              Sample Our Beats
              <svg
                width="51"
                height="22"
                viewBox="0 0 51 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:translate-x-1 transition duration-200 ease-in-out"
              >
                <rect
                  x="0.565956"
                  y="8.9516"
                  width="1.9958"
                  height="3.99161"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="3.55966"
                  y="5.45892"
                  width="1.9958"
                  height="10.9769"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="6.55337"
                  y="3.46313"
                  width="1.9958"
                  height="14.9685"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="9.54708"
                  y="5.95789"
                  width="1.9958"
                  height="9.97902"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="12.5408"
                  y="8.9516"
                  width="1.9958"
                  height="3.99161"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="15.5345"
                  y="6.45685"
                  width="1.9958"
                  height="8.98112"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="18.5282"
                  y="8.45264"
                  width="1.9958"
                  height="4.98951"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="21.5219"
                  y="3.46313"
                  width="1.9958"
                  height="14.9685"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="24.5156"
                  y="0.968384"
                  width="1.9958"
                  height="19.958"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="27.5093"
                  y="2.96417"
                  width="1.9958"
                  height="15.9664"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="30.503"
                  y="0.469421"
                  width="1.9958"
                  height="20.9559"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="33.4967"
                  y="5.45892"
                  width="1.9958"
                  height="10.9769"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="36.4904"
                  y="6.95578"
                  width="1.9958"
                  height="7.98322"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="39.4841"
                  y="2.96417"
                  width="1.9958"
                  height="15.9664"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="42.4779"
                  y="7.9537"
                  width="1.9958"
                  height="5.98741"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="45.4716"
                  y="3.46313"
                  width="1.9958"
                  height="14.9685"
                  rx="0.997902"
                  fill="white"
                />
                <rect
                  x="48.4653"
                  y="5.45892"
                  width="1.9958"
                  height="10.9769"
                  rx="0.997902"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
