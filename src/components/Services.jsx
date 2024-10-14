"use client";
import React from "react";
import { Button } from "./ui/button";
import { BetweenHorizonalStart, Laptop, PanelTopInactive } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const servies = [
    {
      title: "Responsive Website Development",
      description:
        "I specialize in creating fully responsive websites that provide an exceptional user experience across all devices. From landing pages to web applications, I ensure fast load times and seamless navigation on any screen size.",
      icon: <PanelTopInactive />,
    },
    {
      title: " Custom Web Applications",
      description:
        "I design and develop custom web applications tailored to your business goals. Whether it's an interactive dashboard or a complex workflow solution, I create scalable and performance-driven applications that meet specific business needs.",
      icon: <Laptop />,
    },
    {
      title: "Component-Based UI Development",
      description:
        "I build reusable, modular components for your website using modern frameworks like Next.js and libraries like Shadcn UI. This approach ensures a scalable and maintainable codebase, allowing for faster updates and consistent user experiences",
      icon: <BetweenHorizonalStart />,
    },
  ];

  return (
    <div
      id="services"
      className="container mt-10 mx-auto max-w-[90%]  flex flex-col items-center justify-center gap-3"
    >
      <h1 class="text-3xl text-primary text-center font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] py-4">
        My Services
      </h1>
      <div className="div flex flex-col md:flex-row items-center justify-center gap-3 ">
        {servies.map((item, index) => {
          return (
            <div class="flex justify-between md:h-[23rem] lg:h-[20rem] flex-col items-start gap-4 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
              {item.icon}
              <div class="flex w-full gap-1">
                <div class="flex items-center">
                  <div class="flex items-center gap-2">
                    <div class="font-semibold text-xl">{item.title}</div>
                  </div>
                </div>
              </div>
              <div class="text-md text-justify text-muted-foreground">
                {item.description}
              </div>
              <Link href="#contact">
                <Button size="sm">Contact Me</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
