"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui";

const timelineEvents = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Xapika was established in Warsaw, Poland, with a mission to revolutionize railway maintenance.",
  },
  {
    year: "2021",
    title: "European Expansion",
    description: "Expanded operations to Germany, Czech Republic, and Slovakia.",
  },
  {
    year: "2022",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2015 and ISO 14001:2015 certifications.",
  },
  {
    year: "2023",
    title: "Asian Market Entry",
    description: "Opened offices in South Korea and established partnerships in Asia.",
  },
  {
    year: "2024",
    title: "Middle East Expansion",
    description: "Extended services to UAE and Saudi Arabia markets.",
  },
];

export function Timeline() {
  const t = useTranslations("about.history");

  return (
    <section className="section-padding bg-[var(--color-gray-50)]">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-gray-900)] md:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-gray-500)]">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-[var(--color-secondary)]/20 md:block" />

          {/* Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col gap-6 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="rounded-xl bg-white p-6 shadow-sm">
                    <span className="mb-2 inline-block text-sm font-bold text-[var(--color-secondary)]">
                      {event.year}
                    </span>
                    <h3 className="mb-2 text-xl font-semibold text-[var(--color-gray-900)]">
                      {event.title}
                    </h3>
                    <p className="text-[var(--color-gray-500)]">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-[var(--color-secondary)] shadow-md md:block" />

                {/* Empty Space */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
