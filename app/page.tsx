import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";
import Section from "../components/section";
import FrameComponent7 from "../components/frame-component7";
import PracticeEnhancement from "../components/practice-enhancement";
import ContactForm from "../components/contact-form";
import Image from "next/image";
import MainHero from "../components/hero-main";
import AlignExperiences from "../components/main/align-experiences";
import SectionTwo from "../components/main/section-two";

export default function Home() {
  return (
    <div className="overflow-hidden ">
      <MainHero />
      <div className="relative isolate lg:mx-14">
        <AlignExperiences />
        <SectionTwo />
      </div>
    </div>
  );
}
