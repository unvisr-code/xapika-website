"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "@/lib/i18n/routing";

// Text reveal animation wrapper
function TextReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="text-reveal-container">
      <motion.span
        className="block"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HeroSection() {
  const t = useTranslations("home.hero");
  const { scrollY } = useScroll();

  // Parallax effects
  const videoScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentY = useTransform(scrollY, [0, 300], [0, 50]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-primary)]">
      {/* Background Video with Parallax */}
      <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 hero-overlay-gradient" />

        {/* Noise Texture */}
        <div className="absolute inset-0 texture-noise pointer-events-none" />
      </motion.div>

      {/* Decorative Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diagonal Lines Pattern */}
        <motion.div
          className="absolute inset-0 texture-diagonal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        />

        {/* Animated Circle - Top Right */}
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        />

        {/* Animated Circle - Bottom Left */}
        <motion.div
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full border border-[var(--color-accent)]/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
        />

        {/* Glowing Orb */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--color-secondary)]/10 blur-[100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        />

        {/* Accent Orb */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--color-accent)]/10 blur-[80px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 2 }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="container-custom relative z-10"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-5xl">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
            </span>
            <span className="text-sm font-medium tracking-wide text-white/80 uppercase">
              {t("tagline")}
            </span>
          </motion.div>

          {/* Bold Display Headline */}
          <h1 className="headline-display text-white mb-8">
            <TextReveal delay={0.3}>
              <span className="block">Railway</span>
            </TextReveal>
            <TextReveal delay={0.4}>
              <span className="block text-gradient bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-accent)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                Excellence
              </span>
            </TextReveal>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 max-w-xl text-xl md:text-2xl text-white/70 leading-relaxed font-light"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,53,0.4)]"
            >
              <span className="relative z-10">{t("cta")}</span>
              <ArrowRight
                size={20}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-3 text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t("cta")}
                <ArrowRight size={20} />
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <span>{t("ourServices")}</span>
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-gray-50)] to-transparent pointer-events-none" />
    </section>
  );
}
