"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/routing";
import { Menu, ChevronDown, ArrowRight, Wrench, Package, Users, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

const services = [
  {
    id: "maintenance",
    icon: Wrench,
    href: "/services/maintenance",
    color: "from-[var(--color-accent)] to-[var(--color-accent-dark)]",
  },
  {
    id: "parts",
    icon: Package,
    href: "/services/parts",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: "consulting",
    icon: Users,
    href: "/services/consulting",
    color: "from-[var(--color-secondary)] to-blue-700",
  },
  {
    id: "training",
    icon: GraduationCap,
    href: "/services/training",
    color: "from-amber-500 to-orange-600",
  },
];

export function Header() {
  const t = useTranslations("nav");
  const tServices = useTranslations("home.services.items");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showUtilityBar, setShowUtilityBar] = useState(true);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 50);

          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setShowUtilityBar(false);
          } else if (currentScrollY < lastScrollY) {
            setShowUtilityBar(true);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleServicesEnter = useCallback(() => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
  }, []);

  const handleServicesLeave = useCallback(() => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  }, []);

  const navLinks = useMemo(() => [
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services"), hasSubmenu: true },
    { href: "/contact", label: t("contact") },
  ], [t]);

  return (
    <>
      {/* Utility Bar - Top */}
      <AnimatePresence>
        {showUtilityBar && (
          <motion.div
            initial={{ y: -32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -32, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 utility-bar hidden md:block"
          >
            <div className="container-custom">
              <div className="flex h-8 items-center justify-end gap-6">
                <Link
                  href="/privacy"
                  className="text-xs text-white/50 hover:text-white transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-xs text-white/50 hover:text-white transition-colors"
                >
                  Terms
                </Link>
                <div className="h-3 w-px bg-white/20" />
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        style={{ top: showUtilityBar ? 32 : 0 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[var(--color-primary)]/95 backdrop-blur-xl shadow-lg border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-1 text-2xl font-bold text-white"
            >
              <motion.span
                className="text-[var(--color-accent)] transition-colors group-hover:text-[var(--color-accent-light)]"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                X
              </motion.span>
              <span className="tracking-tight">apika</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link, index) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={link.hasSubmenu ? handleServicesEnter : undefined}
                  onMouseLeave={link.hasSubmenu ? handleServicesLeave : undefined}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="group relative flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white py-2"
                    >
                      <span className="relative z-10">{link.label}</span>
                      {link.hasSubmenu && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--color-accent)]"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                      />
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* CTA Button - Desktop */}
              <motion.div
                className="hidden lg:block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-accent)]/30"
                >
                  <span>{t("contact")}</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)]"
            />
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mega Menu - Services */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
            style={{ top: showUtilityBar ? 32 + 80 : 80 }}
            className="fixed left-0 right-0 z-40 mega-menu hidden lg:block"
          >
            <div className="container-custom py-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Services Grid */}
                <div className="col-span-8 grid grid-cols-2 gap-4">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={service.href}
                          className="group flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-white/5"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${service.color}`}
                          >
                            <Icon size={24} className="text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors">
                              {tServices(`${service.id}.title`)}
                            </h4>
                            <p className="mt-1 text-sm text-white/60 line-clamp-2">
                              {tServices(`${service.id}.description`)}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Featured Section */}
                <div className="col-span-4">
                  <div className="rounded-xl bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent p-6 border border-white/5">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-4">
                      Featured
                    </h4>
                    <p className="text-white/80 mb-4">
                      Discover our comprehensive railway maintenance solutions
                    </p>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      View All Services
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
