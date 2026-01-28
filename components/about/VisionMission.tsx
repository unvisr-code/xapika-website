"use client";

import { useTranslations } from "next-intl";
import { Eye, Target } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui";
import Image from "next/image";

export function VisionMission() {
  const t = useTranslations("about.vision");

  return (
    <section className="section-padding bg-white relative overflow-hidden">
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
            Our Purpose
          </motion.span>
          <h2 className="headline-h2 text-[var(--color-gray-900)] mb-4">
            {t("title")}
          </h2>
        </AnimatedSection>

        {/* Full Width Cards */}
        <div className="space-y-8">
          {/* Vision Card - Full Width with Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden min-h-[400px] md:min-h-[320px]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/about/vision.jpg"
                alt="Vision"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/90 to-[var(--color-primary)]/50" />

            {/* Content */}
            <div className="relative z-10 flex h-full min-h-[400px] md:min-h-[320px] items-center p-8 md:p-12 lg:p-16">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-6 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] shadow-2xl"
                >
                  <Eye size={36} className="text-white" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mb-4 text-3xl md:text-4xl font-bold text-white"
                >
                  {t("vision.title")}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl leading-relaxed text-white/80"
                >
                  {t("vision.description")}
                </motion.p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 w-32 h-32 rounded-full border border-white/10 hidden lg:block" />
            <div className="absolute bottom-8 right-24 w-48 h-48 rounded-full border border-[var(--color-accent)]/20 hidden lg:block" />
          </motion.div>

          {/* Mission Card - Full Width with Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden min-h-[400px] md:min-h-[320px]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/about/mission.jpg"
                alt="Mission"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Gradient Overlay - Right aligned */}
            <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-secondary)] via-[var(--color-secondary)]/90 to-[var(--color-secondary)]/50" />

            {/* Content - Right aligned */}
            <div className="relative z-10 flex h-full min-h-[400px] md:min-h-[320px] items-center justify-end p-8 md:p-12 lg:p-16">
              <div className="max-w-2xl text-right">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-6 ml-auto flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl"
                >
                  <Target size={36} className="text-white" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mb-4 text-3xl md:text-4xl font-bold text-white"
                >
                  {t("mission.title")}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl leading-relaxed text-white/80"
                >
                  {t("mission.description")}
                </motion.p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 left-8 w-32 h-32 rounded-full border border-white/10 hidden lg:block" />
            <div className="absolute bottom-8 left-24 w-48 h-48 rounded-full border border-white/10 hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
