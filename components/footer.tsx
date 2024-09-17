import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="lg:mx-14 mx-6 bg-gray-300 rounded-3xl lg:p-10 my-16 p-6">
      <div className="flex lg:flex-row flex-col items-center justify-between ">
        <div className="flex items-start gap-5 flex-col">
          <Image
            src="/bafooter.png"
            alt="Beats Alchemy"
            width={200}
            height={200}
          />
          <p className="text-sm text-start text-gray-500">
            3891 Ranchview Dr. Richardson, California
            <br />
            62639, United States
          </p>
          <Link
            className="flex justify-center items-center gap2"
            href={"mailto:info@beatsalchemy.com"}
          >
            <Mail size={24} />
            <span className="ml-2">info@beatsalchemy.com</span>
          </Link>
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-center lg:items-center items-start -ml-20 lg:-ml-0  mt-10 lg:gap-32 gap-16">
          <div className="flex items-start gap-5 flex-col">
            <h3 className="text-lg font-semibold">Find your way</h3>
            <Link className="text-gray-500" href="/">
              Home
            </Link>
            <Link className="text-gray-500" href="/beats">
              Beats
            </Link>
            <Link className="text-gray-500" href="/about">
              About
            </Link>
            <Link className="text-gray-500" href="/contact">
              Contact
            </Link>
          </div>
          <div className="flex items-start gap-5 flex-col max-lg:mb-6">
            <h3 className="text-lg font-semibold">Find us on Social Media</h3>
            <Link
              className="text-gray-500"
              target="_blank"
              href="https://www.facebook.com/"
            >
              Facebook
            </Link>
            <Link
              target="_blank"
              className="text-gray-500"
              href="https://www.twitter.com/"
            >
              Twitter
            </Link>
            <Link
              target="_blank"
              className="text-gray-500"
              href="https://www.instagram.com/"
            >
              Instagram
            </Link>
            <Link
              target="_blank"
              className="text-gray-500"
              href="https://www.linkedin.com/"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <p className="text-sm text-center text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} Beats Alchemy All rights reserved
      </p>
    </footer>
  );
}
