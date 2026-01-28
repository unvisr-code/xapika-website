"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Award, Briefcase, Globe, Users } from "lucide-react";
import { Link } from "@/lib/i18n/routing";
import { AnimatedSection, ClipReveal, TextReveal } from "@/components/ui";

const stats = [
  { key: "years", value: 20, suffix: "+", icon: Award },
  { key: "projects", value: 500, suffix: "+", icon: Briefcase },
  { key: "countries", value: 15, suffix: "+", icon: Globe },
  { key: "experts", value: 100, suffix: "+", icon: Users },
];

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AboutPreview() {
  const t = useTranslations("home.about");

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[20vw] font-bold text-[var(--color-gray-50)] leading-none tracking-tighter whitespace-nowrap">
          XAPIKA
        </span>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image Side */}
          <div className="lg:col-span-6 relative">
            <ClipReveal direction="up" className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                {/* Main Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)]">
                  {/* Decorative circles */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 right-10 w-48 h-48 rounded-full border border-white/10" />
                    <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full border border-white/10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/5" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl md:text-7xl font-bold text-white/10 tracking-tighter">
                      RAIL
                    </span>
                  </div>
                </div>
              </div>
            </ClipReveal>

            {/* Overlapping Stat Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-8 -right-4 md:right-8 z-20"
            >
              <div className="rounded-2xl bg-[var(--color-accent)] p-6 shadow-2xl shadow-[var(--color-accent)]/30">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                    <Award size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">20+</p>
                    <p className="text-sm text-white/80">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-6">
            <AnimatedSection animation="fadeInUp">
              {/* Section Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 inline-flex items-center gap-2"
              >
                <span className="h-px w-8 bg-[var(--color-secondary)]" />
                <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
                  {t("title")}
                </span>
              </motion.div>

              {/* Title */}
              <h2 className="headline-h2 text-[var(--color-gray-900)] mb-6">
                <TextReveal>{t("subtitle")}</TextReveal>
              </h2>

              {/* Description */}
              <p className="mb-10 text-lg leading-relaxed text-[var(--color-gray-500)]">
                {t("description")}
              </p>

              {/* Stats Grid */}
              <div className="mb-10 grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex items-center gap-4"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--color-gray-50)] transition-colors group-hover:bg-[var(--color-secondary)]/10">
                        <Icon size={24} className="text-[var(--color-secondary)]" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-[var(--color-gray-900)]">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        </p>
                        <p className="text-sm text-[var(--color-gray-500)]">
                          {t(`stats.${stat.key}`)}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 text-lg font-semibold text-[var(--color-secondary)] transition-colors hover:text-[var(--color-primary)]"
                >
                  <span>{t("learnMore")}</span>
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
