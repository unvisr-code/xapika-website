"use client";

import { motion, Variants } from "framer-motion";
import React, { ReactNode } from "react";

type AnimationType =
  | "fadeInUp"
  | "fadeIn"
  | "slideInLeft"
  | "slideInRight"
  | "scaleIn"
  | "clipReveal"
  | "blurIn"
  | "slideUp";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const animations: Record<AnimationType, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  clipReveal: {
    hidden: { clipPath: "inset(100% 0% 0% 0%)" },
    visible: { clipPath: "inset(0% 0% 0% 0%)" },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(20px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  slideUp: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  },
};

// Custom easing curves
const easings = {
  smooth: [0.22, 1, 0.36, 1] as const,
  bounce: [0.68, -0.6, 0.32, 1.6] as const,
  sharp: [0.4, 0, 0.2, 1] as const,
};

export function AnimatedSection({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  duration = 0.7,
  once = true,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: easings.smooth,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for animating children in sequence
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger item to be used inside StaggerContainer
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: easings.smooth }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Orchestrated section with custom delays for each child
interface OrchestratedSectionProps {
  children: ReactNode;
  className?: string;
  delays?: number[];
  animation?: AnimationType;
}

export function OrchestratedSection({
  children,
  className = "",
  delays,
  animation = "fadeInUp",
}: OrchestratedSectionProps) {
  const childrenArray = React.Children.toArray(children);
  const defaultDelays = childrenArray.map((_, index) => index * 0.15);
  const finalDelays = delays || defaultDelays;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          variants={animations[animation]}
          transition={{
            duration: 0.7,
            delay: finalDelays[index] || index * 0.15,
            ease: easings.smooth,
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Text reveal animation for headlines
interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  return (
    <span className={`text-reveal-container ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay,
          ease: easings.smooth,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// Clip reveal for images
interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export function ClipReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ClipRevealProps) {
  const clipPaths = {
    up: {
      hidden: "inset(100% 0% 0% 0%)",
      visible: "inset(0% 0% 0% 0%)",
    },
    down: {
      hidden: "inset(0% 0% 100% 0%)",
      visible: "inset(0% 0% 0% 0%)",
    },
    left: {
      hidden: "inset(0% 100% 0% 0%)",
      visible: "inset(0% 0% 0% 0%)",
    },
    right: {
      hidden: "inset(0% 0% 0% 100%)",
      visible: "inset(0% 0% 0% 0%)",
    },
  };

  return (
    <motion.div
      className={className}
      initial={{ clipPath: clipPaths[direction].hidden }}
      whileInView={{ clipPath: clipPaths[direction].visible }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 1,
        delay,
        ease: easings.smooth,
      }}
    >
      {children}
    </motion.div>
  );
}

// Parallax wrapper
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({ children, className = "", speed = 0.5 }: ParallaxProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      whileInView={{ y: -30 * speed }}
      viewport={{ once: false, margin: "-200px" }}
      transition={{ duration: 0.3, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}
