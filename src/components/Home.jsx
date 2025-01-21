"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Typed from "typed.js";

const page = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Development",
        "HTML",
        "CSS",
        "JavaScript",
        "C#",
        "ASP.Net Core",
        "SQL",
        "React Js",
        "Express Js",
        "MongoDB",
        "Next Js",
        "Tailwind css",
        "Linux OS",
      ],
      typeSpeed: 15,
      backSpeed: 1,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div id="home" className="relative container mx-auto ">
      <section class="mx-auto text-center flex flex-col items-center gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          Welcome to my Portfolio
        </code>
        <h1 class="text-3xl text-center font-bold  leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] ">
          I am <span className="text-primary">Muhammad Junaid</span>
        </h1>
        <h2 className="scroll-m-20 pb-2 text-secondary-foreground text-3xl font-semibold tracking-tight first:mt-0">
          I'm Skilled in <span ref={el} className="font-bold text-primary" />
        </h2>

        <p class="max-w-2xl text-lg font-light text-foreground"></p>
        <div class="flex w-full items-center justify-center gap-2 py-2">
          <Link href="#contact">
            <Button size="sm">Contact Me</Button>
          </Link>
          <Link href="https://github.com/webdevjunaid" target="_blank">
            <Button size="sm" variant="secondary">
              Github <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
