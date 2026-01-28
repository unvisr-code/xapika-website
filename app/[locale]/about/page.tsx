import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui";
import {
  CompanyOverview,
  Timeline,
  VisionMission,
  CEOIntro,
} from "@/components/about";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about.hero");
  return {
    title: t("title"),
    description: t("subtitle"),
    openGraph: {
      title: `${t("title")} | Xapika`,
      description: t("subtitle"),
    },
  };
}

export default function AboutPage() {
  const t = useTranslations("about.hero");

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: t("title") }]}
      />
      <CompanyOverview />
      <VisionMission />
      <Timeline />
      <CEOIntro />
    </>
  );
}
