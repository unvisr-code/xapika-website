"use client";

import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "@/lib/i18n/routing";
import { useTranslations } from "next-intl";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
}: PageHeroProps) {
  const t = useTranslations("common");

  return (
    <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-[var(--color-primary)]">
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-[var(--color-primary)]/80" />
        </>
      )}

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-[var(--color-secondary)]/5" />
        <div className="absolute -bottom-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-[var(--color-secondary)]/5" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-24 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-2 text-sm text-white/60"
          >
            <Link
              href="/"
              className="flex items-center gap-1 transition-colors hover:text-white"
            >
              <Home size={14} />
              <span>{t("backToHome").split(" ")[0]}</span>
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-white"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-white/70"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
