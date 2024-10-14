"use client";
import React from "react";

import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { ImNpm } from "react-icons/im";
import { SiNextdotjs } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { DiWindows } from "react-icons/di";
import { FaUbuntu } from "react-icons/fa6";
import { IoTerminal } from "react-icons/io5";
import { SiReactrouter } from "react-icons/si";

const Skills = () => {
  const servies = [
    {
      icon: <IoLogoHtml5 />,
    },
    {
      icon: <IoLogoCss3 />,
    },
    {
      icon: <FaJsSquare />,
    },
    {
      icon: <SiTailwindcss />,
    },
    {
      icon: <SiExpress />,
    },
    {
      icon: <SiMongodb />,
    },
    {
      icon: <VscVscodeInsiders />,
    },
    {
      icon: <FaReact />,
    },
    {
      icon: <ImNpm />,
    },
    {
      icon: <SiNextdotjs />,
    },
    {
      icon: <SiBootstrap />,
    },
    {
      icon: <DiWindows />,
    },
    {
      icon: <FaUbuntu />,
    },
    {
      icon: <IoTerminal />,
    },
    {
      icon: <SiReactrouter />,
    },
  ];

  return (
    <div
      id="tools"
      className="container mt-10 mx-auto max-w-[80%] flex flex-col items-center justify-center gap-6"
    >
      <h1 class="text-3xl text-primary text-center font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] py-4">
        Tools & Technologies
      </h1>
      <div className="div flex items-center  max-w-full flex-wrap justify-start gap-7 ">
        {servies.map((item, index) => {
          return (
            <div class="flex flex-col items-start gap-4 rounded-lg border p-3 text-left text-5xl transition-all hover:bg-accent">
              {item.icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
