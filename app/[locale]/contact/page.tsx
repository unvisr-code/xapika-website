import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { PageHero, AnimatedSection } from "@/components/ui";
import { ContactForm, ContactInfo } from "@/components/contact";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact.hero");
  return {
    title: t("title"),
    description: t("subtitle"),
    openGraph: {
      title: `${t("title")} | Xapika`,
      description: t("subtitle"),
    },
  };
}

export default function ContactPage() {
  const t = useTranslations("contact.hero");

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: t("title") }]}
      />

      <section className="section-padding bg-[var(--color-gray-50)]">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
            {/* Contact Form */}
            <AnimatedSection animation="slideInLeft">
              <ContactForm />
            </AnimatedSection>

            {/* Contact Info */}
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
