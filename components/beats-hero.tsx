"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BeatsHero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="relative flex flex-col items-start w-full h-[1080px] bg-gradient-to-b from-transparent via-transparent to-white"
    >
      <div className="absolute flex justify-center items-start w-full">
        <Image
          className="object-cover lg:rounded-b-[50px] lg:rounded-t-[70px] filter brightness-75 h-[900px] w-[1600px]"
          width={1600}
          height={1080}
          alt="Ocean"
          src="/beats1.jpg"
          style={{ objectPosition: "top" }} // Moves the image up
        />
      </div>
      <div className="relative z-10 text-start lg:left-36 top-1/4 left-4 w-[90%] lg:w-[50%]">
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:text-[56px] font-inter font-semibold text-white text-[40px] my-4"
        >
          Check out our meditation
          <br />
          beats bellow <br />
        </motion.h1>
        <motion.p
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className=" text-[20px] font-inter font-extralight text-white my-4"
        >
          Name your price and get access to all of our beats bellow
        </motion.p>
        <Link
          className="no-underline group "
          href={
            "https://beatsalchemy.thrivecart.com/pre-channeled-beats-meditation/"
          }
          target="_blank"
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-8 px-6 py-3 cursor-pointer  bg-[#FC506A] text-white rounded-3xl hover:bg-[#fd3a57] transition flex justify-center items-center gap-2 duration-200 ease-in-out font-medium
          "
          >
            Get Now
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
    </motion.section>
  );
}
