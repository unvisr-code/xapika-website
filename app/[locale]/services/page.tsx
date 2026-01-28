import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ServicesHero, ServiceCategories } from "@/components/services";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("services.hero");
  return {
    title: t("title"),
    description: t("subtitle"),
    openGraph: {
      title: `${t("title")} | Xapika`,
      description: t("subtitle"),
    },
  };
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCategories />
    </>
  );
}
