"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Hackerrank from "../../../public/hackerrank.svg";
import Leetcode from "../../../public/leetcode.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

  return (
    <section
      id="social"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-4xl font-bold text-white my-2 ">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-2xl">
          
          Want to chat? Just shoot me a dm with a direct question on LinkedIn and I will respond whenever I can. I will ignore all soliciting.
        </p>
        <div className="socials flex flex-row gap-2 text-2xl">
          <Link href="https://github.com/Himanshumandal/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/himanshu-mandal-aa5193199/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://www.hackerrank.com/profile/himanshum214bte1">
            <Image src={Hackerrank} alt="Hackerrank Icon" />
          </Link>
          <Link href="https://leetcode.com/u/LeetcoderHimanshu21/">
            <Image src={Leetcode} alt="LeetcodeIcon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
