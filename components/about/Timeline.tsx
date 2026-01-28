"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "@/components/ui";

const timelineEvents = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Xapika was established in Warsaw, Poland, with a mission to revolutionize railway maintenance.",
    highlight: true,
  },
  {
    year: "2021",
    title: "European Expansion",
    description: "Expanded operations to Germany, Czech Republic, and Slovakia.",
    highlight: false,
  },
  {
    year: "2022",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2015 and ISO 14001:2015 certifications.",
    highlight: true,
  },
  {
    year: "2023",
    title: "Asian Market Entry",
    description: "Opened offices in South Korea and established partnerships in Asia.",
    highlight: false,
  },
  {
    year: "2024",
    title: "Middle East Expansion",
    description: "Extended services to UAE and Saudi Arabia markets.",
    highlight: true,
  },
];

function TimelineItem({
  event,
  index,
  isLast,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    index % 2 === 0 ? [-20, 0, 0] : [20, 0, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, x }}
      className={`relative flex flex-col gap-6 md:flex-row ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <div
        className={`flex-1 ${
          index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`group rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
            event.highlight
              ? "bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white"
              : "bg-white shadow-sm border border-[var(--color-gray-100)]"
          }`}
        >
          {/* Year Badge */}
          <span
            className={`inline-block mb-3 px-4 py-1.5 rounded-full text-sm font-bold ${
              event.highlight
                ? "bg-[var(--color-accent)] text-white"
                : "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
            }`}
          >
            {event.year}
          </span>

          <h3
            className={`mb-3 text-xl md:text-2xl font-bold ${
              event.highlight ? "text-white" : "text-[var(--color-gray-900)]"
            }`}
          >
            {event.title}
          </h3>

          <p
            className={`leading-relaxed ${
              event.highlight ? "text-white/80" : "text-[var(--color-gray-500)]"
            }`}
          >
            {event.description}
          </p>
        </motion.div>
      </div>

      {/* Center Line & Dot */}
      <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:flex flex-col items-center">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
          className={`relative z-10 h-5 w-5 rounded-full timeline-dot ${
            event.highlight
              ? "bg-[var(--color-accent)]"
              : "bg-[var(--color-secondary)]"
          }`}
        >
          {event.highlight && (
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-[var(--color-accent)]/30"
            />
          )}
        </motion.div>

        {/* Line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="flex-1 w-0.5 origin-top timeline-line"
          />
        )}
      </div>

      {/* Empty Space for alignment */}
      <div className="hidden flex-1 md:block" />
    </motion.div>
  );
}

export function Timeline() {
  const t = useTranslations("about.history");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-padding bg-[var(--color-gray-50)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 texture-dots opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]"
          >
            Our Journey
          </motion.span>
          <h2 className="headline-h2 text-[var(--color-gray-900)] mb-4">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-gray-500)]">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div ref={containerRef} className="relative mx-auto max-w-5xl">
          {/* Progress Line Background */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-[var(--color-gray-200)] rounded-full md:block" />

          {/* Animated Progress Line */}
          <motion.div
            style={{ height: progressHeight }}
            className="absolute left-1/2 top-0 hidden w-1 -translate-x-1/2 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-secondary)] to-[var(--color-accent)] rounded-full md:block origin-top"
          />

          {/* Events */}
          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={event.year}
                event={event}
                index={index}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
