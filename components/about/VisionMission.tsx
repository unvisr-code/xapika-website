"use client";

import { useTranslations } from "next-intl";
import { Eye, Target } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui";

export function VisionMission() {
  const t = useTranslations("about.vision");

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-gray-900)] md:text-4xl">
            {t("title")}
          </h2>
        </AnimatedSection>

        {/* Cards */}
        <StaggerContainer className="grid gap-8 lg:grid-cols-2">
          {/* Vision */}
          <StaggerItem>
            <div className="h-full rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] p-8 text-white md:p-12">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white/10">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">
                {t("vision.title")}
              </h3>
              <p className="text-lg leading-relaxed text-white/80">
                {t("vision.description")}
              </p>
            </div>
          </StaggerItem>

          {/* Mission */}
          <StaggerItem>
            <div className="h-full rounded-2xl bg-gradient-to-br from-[var(--color-secondary)] to-[#0052A3] p-8 text-white md:p-12">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white/10">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">
                {t("mission.title")}
              </h3>
              <p className="text-lg leading-relaxed text-white/80">
                {t("mission.description")}
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
