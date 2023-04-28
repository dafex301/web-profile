"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import { useWindowSize } from "@/libs/Window";

import Experience from "@/components/Experience";
import experiences from "@/data/experiences.json";

import SocialMedia from "@/components/SocialMedia";
import socialmedias from "@/data/social-media.json";

import Skill from "@/components/Skill";
import skills from "@/data/skills.json";

import Trail from "@/components/animations/Trail";
import FadeIn from "@/components/animations/FadeIn";

export default function Home() {
  const [open, set] = useState(true);
  const [contentVisibility, setContentVisibility] = useState({
    content1: false,
    content2: false,
  });

  const windowSize = useWindowSize();

  return (
    <>
      {/* Hero */}
      <main className="bg-gray-700 text-white">
        <div className="xl:mx-64 lg:mx-32 mx-5">
          <div className="grid grid-cols-12 gap-3">
            {/* Left Layout */}
            <div className="col-start-2 col-span-2 flex flex-col justify-center">
              <div className="">
                {/* <div> */}
                <Trail open={open}>
                  <h1 className="md:text-7xl text-xl font-bold drop-shadow-md text-yellow-500">
                    Fahrel
                  </h1>
                  <h1 className="md:text-7xl text-xl font-bold drop-shadow-md text-white">
                    Gibran
                  </h1>
                  <h1 className="md:text-7xl text-xl font-bold drop-shadow-md text-white">
                    Alghany.
                  </h1>
                  <div className="md:w-12 md:h-2 w-6 h-1 mt-3 bg-yellow-500"></div>
                </Trail>
              </div>

              <div className="flex md:mt-24 mt-5 gap-2 translate-x-4 md:translate-x-7 scale-75 md:scale-100">
                {socialmedias.map((socialmedia, index) => (
                  <SocialMedia
                    key={index}
                    href={socialmedia.href}
                    icon={socialmedia.icon}
                    name={socialmedia.name}
                  />
                ))}
              </div>
            </div>
            {/* End of Left Layout */}

            {/* Center Layout */}
            <div className="col-span-6 z-10">
              <Image
                alt="Cover"
                src={"/cover.png"}
                width={800}
                height={800}
                onClick={() => set((state) => !state)}
                className={"cursor-pointer"}
              />
            </div>
            {/* End of Center Layout */}

            {/* Right Layout */}
            <div className="md:col-span-2 flex flex-col justify-center">
              <h3 className="md:text-sm text-xs text-gray-400">Introduction</h3>
              <h2 className="md:text-2xl mb-3 mt-2 font-semibold">
                Informatics Student
              </h2>
              <p className="text-xs text-gray-400 mb-5 hidden md:block">
                A dedicated Informatics student at Universitas Diponegoro,
                driven by passion for technology and desire to stay at the
                forefront of innovation.
              </p>
              <Link
                href={"https://wa.me/+6281270360350"}
                target="_blank"
                className="md:text-sm text-xs font-semibold inline hover:cursor-pointer text-yellow-500 hover:underline transition-all"
              >
                Contact
              </Link>
            </div>
            {/* End of Right Layout */}
          </div>
        </div>
      </main>
      {/* End of Hero */}

      {/* Content */}
      <div className="bg-gray-800 text-white py-12 pb-36">
        {/* Content 1 */}
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible: boolean) => {
            if (isVisible) {
              setContentVisibility({ ...contentVisibility, content1: true });
            }
          }}
        >
          <FadeIn isVisible={contentVisibility.content1}>
            <div className="xl:mx-64 mx-12 grid md:grid-cols-12 grid-cols-1 md:my-10">
              <div className="md:col-span-4">
                <div className="mb-5 md:mb-0">
                  <h2 className="md:text-2xl text-lg font-semibold text-center md:text-left">
                    Experiences
                  </h2>
                  <h4 className="text-gray-300 text-center md:text-left md:text-base text-sm">
                    {new Date().getFullYear() - 2020} years in tech
                  </h4>
                </div>
              </div>
              <div className="col-span-8 grid md:grid-cols-12 gap-8">
                {experiences.map((experience, index) => (
                  <Experience
                    key={index}
                    company={experience.company}
                    position={experience.position}
                    logo={experience.logo}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </VisibilitySensor>

        {/* End of Content 1 */}

        {/* Content 2 */}
        <VisibilitySensor
          partialVisibility={windowSize.width! <= 768}
          onChange={(isVisible: boolean) => {
            if (isVisible) {
              setContentVisibility({ ...contentVisibility, content2: true });
            }
          }}
        >
          <FadeIn isVisible={contentVisibility.content2}>
            <div className="xl:mx-64 md:mx-24 mx-5">
              <center className="py-12">
                <h2 className="md:text-2xl text-lg font-semibold text-center">
                  Specialities
                </h2>
                <p className="text-gray-300 text-center md:text-base text-sm">
                  Here are some of my areas of expertise that I&apos;ve learned
                  throughout my years of studying computer science and
                  technology.
                </p>
              </center>

              {/* Skill Container */}
              <div className="flex flex-col lg:flex-row">
                {/* Skill */}
                {skills.map((skill, index) => (
                  <Skill
                    key={index}
                    title={skill.title}
                    icon={skill.icon}
                    description={skill.description}
                  />
                ))}
                {/* End of Skill */}
              </div>
              {/* End of Skill Container */}
            </div>
          </FadeIn>
        </VisibilitySensor>

        {/* End of Content 2 */}
      </div>
      {/* End of Content */}
    </>
  );
}
