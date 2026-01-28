"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/routing";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <footer className="relative bg-[var(--color-primary)] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Diagonal lines */}
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
          viewBox="0 0 400 800"
          fill="none"
        >
          <path d="M0 0L400 800M100 0L400 600M200 0L400 400M300 0L400 200" stroke="currentColor" strokeWidth="1" />
          <path d="M400 0L0 800M400 200L100 800M400 400L200 800M400 600L300 800" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Gradient orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[120px]" />
      </div>

      {/* Large Brand Text */}
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-16 pb-8"
        >
          <span className="text-[15vw] md:text-[12vw] font-bold text-white/[0.03] leading-none tracking-tighter select-none">
            XAPIKA
          </span>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div
            custom={0}
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/"
              className="group mb-6 inline-flex items-center gap-1 text-2xl font-bold"
            >
              <span className="text-[var(--color-secondary)] transition-colors group-hover:text-[var(--color-accent)]">X</span>
              <span className="tracking-tight">apika</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/50 mb-6">
              Your trusted partner in railway vehicle maintenance. Providing
              comprehensive solutions for railway operators worldwide.
            </p>
            {/* Social Links Placeholder */}
            <div className="flex gap-3">
              {["LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-all hover:bg-[var(--color-secondary)] hover:text-white"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            custom={1}
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/40">
              {t("company.title")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: t("company.about") },
                { href: "/about#history", label: t("company.history") },
                { href: "/about#team", label: t("company.team") },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            custom={2}
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/40">
              {t("services.title")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/services/maintenance", label: t("services.maintenance") },
                { href: "/services/parts", label: t("services.parts") },
                { href: "/services/consulting", label: t("services.consulting") },
                { href: "/services/training", label: t("services.training") },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            custom={3}
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/40">
              {t("contact.title")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[var(--color-secondary)]/20 transition-colors">
                  <MapPin size={14} className="text-[var(--color-secondary)]" />
                </div>
                <span className="text-sm text-white/60 leading-relaxed">
                  {t("contact.address")}
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[var(--color-secondary)]/20 transition-colors">
                  <Phone size={14} className="text-[var(--color-secondary)]" />
                </div>
                <a
                  href={`tel:${t("contact.phone")}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {t("contact.phone")}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[var(--color-secondary)]/20 transition-colors">
                  <Mail size={14} className="text-[var(--color-secondary)]" />
                </div>
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {t("contact.email")}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-xs text-white/30">
            {t("copyright", { year: currentYear })}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/30 transition-colors hover:text-white"
            >
              {t("legal.privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/30 transition-colors hover:text-white"
            >
              {t("legal.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
