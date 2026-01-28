import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { PageHero, Button, AnimatedSection } from "@/components/ui";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const t = await getTranslations("home.services.items");
  const title = t(`${service.id}.title`);
  const description = t(`${service.id}.description`);

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Xapika Services`,
      description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} />;
}

function ServiceDetailContent({
  service,
}: {
  service: (typeof services)[number];
}) {
  const t = useTranslations("home.services.items");
  const tService = useTranslations("services.detail");
  const tNav = useTranslations("nav");
  const Icon = service.icon;

  return (
    <>
      <PageHero
        title={t(`${service.id}.title`)}
        subtitle={t(`${service.id}.description`)}
        breadcrumbs={[
          { label: tNav("services"), href: "/services" },
          { label: t(`${service.id}.title`) },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Content */}
            <AnimatedSection animation="slideInLeft">
              <div
                className={`mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color}`}
              >
                <Icon size={40} className="text-white" />
              </div>

              <h2 className="mb-6 text-3xl font-bold text-[var(--color-gray-900)]">
                {tService("whatWeOffer")}
              </h2>

              <p className="mb-8 text-lg leading-relaxed text-[var(--color-gray-500)]">
                {t(`${service.id}.description`)} Our team of experts is
                dedicated to providing the highest quality services to meet your
                railway maintenance needs.
              </p>

              {/* Features List */}
              <ul className="mb-8 space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)]/10">
                      <Check
                        size={14}
                        className="text-[var(--color-secondary)]"
                      />
                    </div>
                    <span className="text-[var(--color-gray-700)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button as="link" href="/contact">
                {tService("getQuote")}
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </AnimatedSection>

            {/* Image Placeholder */}
            <AnimatedSection animation="slideInRight">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--color-gray-100)] to-[var(--color-gray-50)]">
                <div className="flex h-full items-center justify-center">
                  <Icon
                    size={120}
                    className="text-[var(--color-gray-300)]"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
