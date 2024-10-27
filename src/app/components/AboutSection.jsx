"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>C++/C</li>
        <li>Python</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "FrameWork/other",
    id: "framework",
    content: (
      <ul className="list-disc pl-2">
        <li>Tailwind/Bootstrap/MUI/Framer-motion</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Nextjs</li>
        <li>Scoketio</li>
        <li>MongoDB</li>
        <li>SQL</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Nav Jeewan Academy SR. SEC. School- 10th , 2017-2018</li>
        <li>Nav Jeewan Academy SR. SEC. School- 12th , 2019-2020</li>
        <li>KCC Institute of Technology and Management - B.Tech(C.S.E) , 2021-2025</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "exp",
    content: (
      <ul className="list-disc pl-2">
        <li>JP Tech Studio- Web Development Intern,  April 2024 - July 2024</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>C/C++ by Sololearn</li>
        <li>Python by Sololearn</li>
        <li>MySQL by Sololearn</li>
        <li>Data Structure and Algorithm by Udemy</li>
        <li><a href="https://www.hackerrank.com/certificates/5b157c87bce8" className="hover:text-red-500">Problem Solving</a></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="work"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a highly driven Computer Science Engineering student actively pursuing an internship in the software industry. With a strong foundation in algorithms, data structures, and web development, I excel in developing efficient, scalable solutions. Proficient in C/C++, and experienced in Python, Java, HTML, CSS, JavaScript,Typescript, React (Next.js), Node.js, Appwrite, and MySQL, I have successfully solved 350+ problems on, and hold a 5-star rating on HackerRank. I am eager to apply my skills and grow within a fast-paced, innovation-driven environment.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("framework")}
              active={tab === "framework"}
            >
              {" "}
              FrameWork/other{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("exp")}
              active={tab === "exp"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
