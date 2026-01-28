"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Wrench, Package, Users, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "@/lib/i18n/routing";
import { AnimatedSection, TextReveal } from "@/components/ui";
import Image from "next/image";

const services = [
  {
    id: "maintenance",
    icon: Wrench,
    image: "/images/services/maintenance.jpg",
    color: "from-[var(--color-accent)] to-[var(--color-accent-dark)]",
    slug: "/services/maintenance",
  },
  {
    id: "parts",
    icon: Package,
    image: "/images/services/parts.jpg",
    color: "from-emerald-500 to-emerald-600",
    slug: "/services/parts",
  },
  {
    id: "consulting",
    icon: Users,
    image: "/images/services/consulting.jpg",
    color: "from-[var(--color-secondary)] to-blue-700",
    slug: "/services/consulting",
  },
  {
    id: "training",
    icon: GraduationCap,
    image: "/images/services/training.jpg",
    color: "from-amber-500 to-orange-600",
    slug: "/services/training",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function ServicesOverview() {
  const t = useTranslations("home.services");

  return (
    <section className="section-padding bg-[var(--color-gray-50)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 texture-dots pointer-events-none" />

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 gradient-mesh pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-16 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]"
          >
            What We Do
          </motion.span>
          <h2 className="headline-h2 text-[var(--color-gray-900)] mb-6">
            <TextReveal>{t("title")}</TextReveal>
          </h2>
          <p className="text-lg text-[var(--color-gray-500)] leading-relaxed">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        {/* Asymmetric Grid Layout with Image Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Card - Maintenance (spans 7 cols, 2 rows) */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 lg:row-span-2"
          >
            <Link
              href={services[0].slug}
              className="image-card group relative flex h-full min-h-[500px] flex-col justify-end overflow-hidden rounded-3xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={services[0].image}
                  alt={t(`items.${services[0].id}.title`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Icon Badge */}
              <motion.div
                className={`absolute top-8 right-8 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${services[0].color} shadow-2xl z-10`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Wrench size={32} className="text-white" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10">
                <h3 className="mb-4 text-3xl md:text-4xl font-bold text-white">
                  {t(`items.${services[0].id}.title`)}
                </h3>
                <p className="mb-6 max-w-lg text-lg text-white/80 leading-relaxed">
                  {t(`items.${services[0].id}.description`)}
                </p>
                <div className="inline-flex items-center gap-3 text-[var(--color-accent)] font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>{t("learnMore")}</span>
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Small Cards - Parts & Consulting (each spans 5 cols) */}
          {services.slice(1, 3).map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                custom={idx + 1}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <Link
                  href={service.slug}
                  className="image-card group relative flex h-full min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={t(`items.${service.id}.title`)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10`} />

                  {/* Icon */}
                  <div
                    className={`absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300 z-10`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 md:p-8">
                    <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                      {t(`items.${service.id}.title`)}
                    </h3>
                    <p className="mb-4 text-white/70 line-clamp-2">
                      {t(`items.${service.id}.description`)}
                    </p>

                    {/* Link */}
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
                      <span>{t("learnMore")}</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* Wide Card - Training (spans 8 cols, offset) */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 lg:col-start-3"
          >
            <Link
              href={services[3].slug}
              className="image-card group relative flex flex-col md:flex-row md:items-center gap-0 rounded-2xl overflow-hidden min-h-[200px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={services[3].image}
                  alt={t(`items.${services[3].id}.title`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 67vw"
                />
              </div>

              {/* Gradient Overlay - horizontal for wide card */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/80 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${services[3].color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10`} />

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 w-full">
                {/* Icon */}
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${services[3].color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <GraduationCap size={32} className="text-white" />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                    {t(`items.${services[3].id}.title`)}
                  </h3>
                  <p className="text-white/70">
                    {t(`items.${services[3].id}.description`)}
                  </p>
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] md:shrink-0">
                  <span>{t("learnMore")}</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
