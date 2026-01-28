"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "@/lib/i18n/routing";
import { TextReveal } from "@/components/ui";

export function ContactCTA() {
  const t = useTranslations("home.cta");

  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary)]" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated circles */}
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full border border-[var(--color-accent)]/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[var(--color-accent)]/15 rounded-full blur-[120px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Diagonal lines */}
        <div className="absolute inset-0 texture-diagonal opacity-30" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-sm font-medium text-white/70">Ready to Start?</span>
          </motion.div>

          {/* Title */}
          <h2 className="headline-h1 text-white mb-6">
            <TextReveal>{t("title")}</TextReveal>
          </h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
            >
              <span>{t("button")}</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="mailto:contact@xapika.com"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <Mail size={20} />
              <span>Send Email</span>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/50"
          >
            <a
              href="tel:+48123456789"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone size={18} />
              <span>+48 123 456 789</span>
            </a>
            <span className="hidden sm:block">|</span>
            <a
              href="mailto:contact@xapika.com"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail size={18} />
              <span>contact@xapika.com</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
