"use client";

import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui";

export function CEOIntro() {
  const t = useTranslations("about.ceo");

  return (
    <section className="section-padding bg-[var(--color-gray-50)]">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
              <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
                {/* CEO Photo Placeholder */}
                <div className="mx-auto md:mx-0">
                  <div className="h-48 w-48 overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)]">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-4xl font-bold text-white/20">
                        CEO
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-[var(--color-gray-900)] md:text-3xl">
                    {t("title")}
                  </h2>

                  {/* Quote */}
                  <div className="relative">
                    <Quote
                      size={40}
                      className="absolute -top-2 -left-2 text-[var(--color-secondary)]/20"
                    />
                    <blockquote className="relative z-10 pl-8 text-lg leading-relaxed text-[var(--color-gray-500)] italic">
                      {t("message")}
                    </blockquote>
                  </div>

                  {/* CEO Info */}
                  <div className="mt-8 border-t border-[var(--color-gray-100)] pt-6">
                    <p className="font-semibold text-[var(--color-gray-900)]">
                      {t("name")}
                    </p>
                    <p className="text-sm text-[var(--color-gray-500)]">
                      {t("position")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
