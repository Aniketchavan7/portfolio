"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { usePerfProfile } from "@/hooks/use-perf-profile";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const SectionWrapper = ({ id, className, children, ...props }: SectionWrapperProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { reducedMotion, ready } = usePerfProfile();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.9, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.12, 0.9, 1], [0.98, 1, 1, 0.98]);

  return (
    <section
      id={id}
      ref={containerRef}
      className={cn("relative", className)}
      {...props}
    >
      <motion.div
        style={!ready || reducedMotion ? undefined : { opacity, scale }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
