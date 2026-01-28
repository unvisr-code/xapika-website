"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@/lib/i18n/routing";
import { services } from "@/data/services";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui";

export function ServiceCategories() {
  const t = useTranslations("services.categories");
  const tItems = useTranslations("home.services.items");
  const tCommon = useTranslations("common");

  return (
    <section className="section-padding bg-white">
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

        {/* Services Grid */}
        <StaggerContainer className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <div className="group flex h-full flex-col rounded-2xl border border-[var(--color-gray-100)] bg-white p-8 transition-all duration-300 hover:border-[var(--color-secondary)]/20 hover:shadow-xl">
                  {/* Header */}
                  <div className="mb-6 flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${service.color}`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--color-gray-900)]">
                        {tItems(`${service.id}.title`)}
                      </h3>
                      <p className="mt-1 text-[var(--color-gray-500)]">
                        {tItems(`${service.id}.description`)}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mb-6 flex-1 space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-[var(--color-secondary)]"
                        />
                        <span className="text-[var(--color-gray-600)]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 font-medium text-[var(--color-secondary)] transition-colors hover:text-[#0052A3]"
                  >
                    <span>{tCommon("learnMore")}</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
