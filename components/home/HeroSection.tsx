"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "@/lib/i18n/routing";
import { useRef, useState, useEffect } from "react";

export function HeroSection() {
  const t = useTranslations("home.hero");
  const { scrollY } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentY = useTransform(scrollY, [0, 300], [0, 50]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = () => {
      setIsVideoReady(true);
    };

    // 이미 로드된 경우
    if (video.readyState >= 3) {
      setIsVideoReady(true);
    }

    video.addEventListener("canplay", handleReady);
    return () => video.removeEventListener("canplay", handleReady);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-primary)]">
      {/* Background Video */}
      <div className="absolute inset-0">
        {/* Poster Image (shown while video loads) */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isVideoReady ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: "url(/images/hero-poster.jpg)" }}
        />

        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="container-custom">
          <div className="flex flex-col items-center text-center">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 inline-flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              </span>
              <span className="text-sm font-medium tracking-wide text-[var(--color-accent)] uppercase">
                {t("tagline")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
              style={{ textShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}
            >
              <span className="block">Railway</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-light)] via-[var(--color-accent)] to-[var(--color-secondary)]">
                Excellence
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-10 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed"
              style={{ textShadow: "0 2px 20px rgba(0, 0, 0, 0.5)" }}
            >
              {t("subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white font-semibold rounded-lg transition-all duration-300"
              >
                <span>{t("cta")}</span>
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/50 hover:border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
              >
                <span>{t("ourServices")}</span>
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}
