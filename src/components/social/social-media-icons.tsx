"use client";

import { useInView } from "motion/react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Code2 } from "lucide-react";
import { config } from "@/data/config";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={"24"} color={"#fff"} />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"24"} color={"#fff"} />,
  },
  {
    name: "Codolio (CP Profile)",
    href: config.social.codolio,
    icon: <Code2 size={"24"} className="text-white" />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10 flex gap-1">
      {show &&
        BUTTONS.map((button) => (
          <Tooltip key={button.name} delayDuration={300}>
            <TooltipTrigger asChild>
              <Link href={button.href} target="_blank">
                <Button variant={"ghost"}>{button.icon}</Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{button.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
