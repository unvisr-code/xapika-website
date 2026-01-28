"use client";

import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
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
      color: "from-[var(--color-accent)] to-[var(--color-accent-dark)]",
    },
    {
      icon: Phone,
      label: t("phone"),
      value: tFooter("phone"),
      href: `tel:${tFooter("phone")}`,
      color: "from-[var(--color-secondary)] to-blue-700",
    },
    {
      icon: Mail,
      label: t("email"),
      value: tFooter("email"),
      href: `mailto:${tFooter("email")}`,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Clock,
      label: t("hours"),
      value: t("hoursValue"),
      href: null,
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <AnimatedSection animation="slideInRight">
      <div className="rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] p-8 md:p-10 text-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-white/5" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full border border-[var(--color-accent)]/10" />
        <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full bg-[var(--color-accent)]/5 blur-[80px]" />

        {/* Header */}
        <div className="relative z-10 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-2"
          >
            {t("title")}
          </motion.h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-full" />
        </div>

        {/* Contact Items */}
        <div className="relative z-10 space-y-6">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                  item.href ? "hover:bg-white/5 cursor-pointer" : ""
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white/50 mb-1 uppercase tracking-wide">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group/link inline-flex items-center gap-2 text-lg text-white font-medium transition-colors hover:text-[var(--color-accent)]"
                    >
                      <span>{item.value}</span>
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all"
                      />
                    </a>
                  ) : (
                    <p className="text-lg text-white font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative z-10 mt-10 pt-8 border-t border-white/10"
        >
          <p className="text-white/60 text-sm mb-4">
            Need immediate assistance?
          </p>
          <a
            href={`tel:${tFooter("phone")}`}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-accent)]/30"
          >
            <Phone size={18} />
            <span>Call Us Now</span>
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
