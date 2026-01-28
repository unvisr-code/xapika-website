"use client";

import { useTranslations } from "next-intl";
import { PageHero } from "@/components/ui";

export function ServicesHero() {
  const t = useTranslations("services.hero");

  return (
    <PageHero
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumbs={[{ label: t("title") }]}
    />
  );
}
