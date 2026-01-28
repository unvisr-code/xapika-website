"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, TextReveal } from "@/components/ui";

// Placeholder partner logos (replace with actual logos)
const partners = [
  { name: "Deutsche Bahn", logo: "/images/partners/partner-1.svg" },
  { name: "PKP Intercity", logo: "/images/partners/partner-2.svg" },
  { name: "SBB", logo: "/images/partners/partner-3.svg" },
  { name: "ÖBB", logo: "/images/partners/partner-4.svg" },
  { name: "Renfe", logo: "/images/partners/partner-5.svg" },
  { name: "Trenitalia", logo: "/images/partners/partner-6.svg" },
];

export function PartnersSlider() {
  const t = useTranslations("home.partners");
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="section-padding overflow-hidden bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 texture-dots opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]"
          >
            Our Partners
          </motion.span>
          <h2 className="headline-h2 text-[var(--color-gray-900)] mb-4">
            <TextReveal>{t("title")}</TextReveal>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-gray-500)]">
            {t("subtitle")}
          </p>
        </AnimatedSection>
      </div>

      {/* Infinite Slider */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-white to-transparent" />

        {/* Slider Track */}
        <div
          className="flex animate-scroll"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {/* First Set */}
          <div className="flex shrink-0 items-center gap-12 px-6">
            {partners.map((partner, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{ scale: 1.05 }}
                className="group flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-gray-100)] bg-white px-6 transition-all duration-300 hover:border-[var(--color-secondary)]/30 hover:shadow-lg"
              >
                {/* Placeholder - Replace with actual Image component */}
                <span className="text-sm font-semibold text-[var(--color-gray-400)] group-hover:text-[var(--color-gray-600)] transition-colors">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Duplicate Set for Infinite Loop */}
          <div className="flex shrink-0 items-center gap-12 px-6">
            {partners.map((partner, index) => (
              <motion.div
                key={`second-${index}`}
                whileHover={{ scale: 1.05 }}
                className="group flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-gray-100)] bg-white px-6 transition-all duration-300 hover:border-[var(--color-secondary)]/30 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[var(--color-gray-400)] group-hover:text-[var(--color-gray-600)] transition-colors">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="container-custom mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-[var(--color-gray-100)]"
        >
          {[
            { value: "50+", label: "Partners Worldwide" },
            { value: "15+", label: "Countries Served" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-[var(--color-gray-900)] mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[var(--color-gray-500)]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
