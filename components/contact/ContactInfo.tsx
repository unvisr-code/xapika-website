"use client";

import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/ui";

export function ContactInfo() {
  const t = useTranslations("contact.info");
  const tFooter = useTranslations("footer.contact");

  const contactItems = [
    {
      icon: MapPin,
      label: t("address"),
      value: tFooter("address"),
      href: null,
    },
    {
      icon: Phone,
      label: t("phone"),
      value: tFooter("phone"),
      href: `tel:${tFooter("phone")}`,
    },
    {
      icon: Mail,
      label: t("email"),
      value: tFooter("email"),
      href: `mailto:${tFooter("email")}`,
    },
    {
      icon: Clock,
      label: t("hours"),
      value: t("hoursValue"),
      href: null,
    },
  ];

  return (
    <AnimatedSection animation="slideInRight">
      <div className="rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] p-8 text-white">
        <h2 className="mb-8 text-2xl font-bold">{t("title")}</h2>

        <div className="space-y-6">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Icon size={22} className="text-[var(--color-secondary)]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/60">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-lg text-white transition-colors hover:text-[var(--color-secondary)]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg text-white">{item.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
