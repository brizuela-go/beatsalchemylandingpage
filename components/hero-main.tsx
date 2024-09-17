"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MainHero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="relative flex flex-col items-start w-full h-[1080px] bg-gradient-to-b from-transparent via-transparent to-white"
    >
      <div className="absolute lg:mt-2 mt-0  flex justify-center items-start w-full h-full">
        <Image
          className="object-cover lg:rounded-b-[50px] rounded-none max-lg:w-full max-lg:h-full max-lg:object-left-bottom"
          width={1600}
          height={900}
          alt="woman meditating"
          src="/rectangle-2@2x.png"
          style={{ objectPosition: "top" }} // Moves the image up
        />
      </div>
      <div className="relative z-10 text-start lg:left-36 top-1/4 left-4 w-[90%] lg:w-[50%]">
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:text-[56px] font-inter font-semibold text-[40px] my-4 text-[#393939]"
        >
          Boost Your Healing
          <br />
          Practice with Custom <br />
          <span className="text-[#FC506A]">Binaural Beats</span>
        </motion.h1>
        <motion.p
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-[20px] font-inter font-thin text-[#28272B]"
        >
          Help Your Clients Achieve Peak States and Transform
          <br />
          Their Inner Experiences
        </motion.p>
        <Link className="no-underline group " href={"/beats"}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-8 px-6 py-3 cursor-pointer  bg-[#FC506A] text-white rounded-3xl hover:bg-[#fd3a57] transition flex justify-center items-center gap-2 duration-200 ease-in-out font-medium
          "
          >
            Sample Our Sounds
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
          </motion.button>
        </Link>
      </div>
      <Link
        href="/beats"
        className="absolute z-10 text-start top-1/3 right-36 no-underline group max-lg:hidden"
      >
        {/* card with glassmorphism with text inside named beats puliminary */}
        <div className=" bg-[#E1E1E1] bg-opacity-50 backdrop-blur-sm rounded-3xl p-3 group-hover:bg-[#FC506A] group-hover:bg-opacity-50 transition duration-200 ease-in-out">
          <h2 className="text-[20px] text-white font-inter font-semibold ">
            Latest Beat
          </h2>
          <p className="mt-4 text-[14px] text-white font-inter font-thin">
            12:03
          </p>
          <svg
            width="127"
            height="31"
            viewBox="0 0 127 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.918823"
              y="10.5558"
              width="3.83194"
              height="9.57986"
              rx="1.91597"
              fill="#FC506A"
            />
            <rect
              x="7.30542"
              y="6.08516"
              width="3.83194"
              height="18.5211"
              rx="1.91597"
              fill="#FC506A"
            />
            <rect
              x="13.692"
              y="0.656693"
              width="3.83194"
              height="29.3782"
              rx="1.91597"
              fill="#FC506A"
            />
            <rect
              x="20.0786"
              y="3.53062"
              width="3.83194"
              height="23.6303"
              rx="1.91597"
              fill="#FC506A"
            />
            <rect
              x="26.4651"
              y="6.72398"
              width="3.83194"
              height="17.2438"
              rx="1.91597"
              fill="#FC506A"
            />
            <rect
              x="32.8517"
              y="3.85005"
              width="3.83194"
              height="22.9917"
              rx="1.91597"
              fill="#FC506A"
            />
            <rect
              x="39.2383"
              y="6.40477"
              width="3.83194"
              height="17.8824"
              rx="1.91597"
              fill="white"
            />
            <rect
              x="45.6249"
              y="8.00125"
              width="3.83194"
              height="14.6891"
              rx="1.91597"
              fill="white"
            />
            <rect
              x="52.0115"
              y="0.656693"
              width="3.83194"
              height="29.3782"
              rx="1.91597"
              fill="white"
            />
            <rect
              x="58.398"
              y="5.44652"
              width="3.83194"
              height="19.7984"
              rx="1.91597"
              fill="white"
            />
            <rect
              x="64.7846"
              y="3.53062"
              width="3.83194"
              height="23.6303"
              rx="1.91597"
              fill="white"
            />
            <rect
              x="71.1711"
              y="9.91734"
              width="3.83194"
              height="10.8572"
              rx="1.91597"
              fill="white"
            />
            <rect
              x="77.5577"
              y="0.656693"
              width="3.83194"
              height="29.3782"
              rx="1.91597"
              fill="white"
            />
            <rect
              x="83.9443"
              y="6.08516"
              width="3.83194"
              height="18.5211"
              rx="1.91597"
              fill="white"
            />
            <rect
              x="90.3309"
              y="3.85005"
              width="3.83194"
              height="22.9917"
              rx="1.91597"
              fill="white"
            />
            <rect
              x="96.7175"
              y="0.656693"
              width="3.83194"
              height="29.3782"
              rx="1.91597"
              fill="white"
            />
            <rect
              x="103.104"
              y="7.36282"
              width="3.83194"
              height="15.9664"
              rx="1.91597"
              fill="white"
            />
            <rect
              x="109.491"
              y="3.21141"
              width="3.83194"
              height="24.269"
              rx="1.91597"
              fill="white"
            />
            <rect
              x="115.877"
              y="8.9595"
              width="3.83194"
              height="12.7731"
              rx="1.91597"
              fill="white"
            />
            <rect
              x="122.264"
              y="3.85005"
              width="3.83194"
              height="22.9917"
              rx="1.91597"
              fill="white"
            />
          </svg>
        </div>
      </Link>
    </motion.section>
  );
}
