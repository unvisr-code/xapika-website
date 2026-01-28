"use client";

import { useTranslations } from "next-intl";
import { Shield, Award, Lightbulb, Handshake } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui";

const values = [
  { key: "safety", icon: Shield, color: "from-blue-500 to-blue-600" },
  { key: "quality", icon: Award, color: "from-emerald-500 to-emerald-600" },
  { key: "innovation", icon: Lightbulb, color: "from-amber-500 to-amber-600" },
  { key: "partnership", icon: Handshake, color: "from-purple-500 to-purple-600" },
];

export function CompanyOverview() {
  const t = useTranslations("about.overview");

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Description */}
          <AnimatedSection animation="slideInLeft">
            <h2 className="mb-6 text-3xl font-bold text-[var(--color-gray-900)] md:text-4xl">
              {t("title")}
            </h2>
            <p className="text-lg leading-relaxed text-[var(--color-gray-500)]">
              {t("description")}
            </p>
          </AnimatedSection>

          {/* Core Values */}
          <AnimatedSection animation="slideInRight">
            <h3 className="mb-8 text-2xl font-bold text-[var(--color-gray-900)]">
              {t("values.title")}
            </h3>
            <StaggerContainer className="grid gap-6 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <StaggerItem key={value.key}>
                    <div className="rounded-xl border border-[var(--color-gray-50)] bg-[var(--color-gray-50)] p-6 transition-all duration-300 hover:border-[var(--color-secondary)]/20 hover:bg-white hover:shadow-lg">
                      <div
                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${value.color}`}
                      >
                        <Icon size={24} className="text-white" />
                      </div>
                      <h4 className="mb-2 font-semibold text-[var(--color-gray-900)]">
                        {t(`values.${value.key}.title`)}
                      </h4>
                      <p className="text-sm text-[var(--color-gray-500)]">
                        {t(`values.${value.key}.description`)}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
