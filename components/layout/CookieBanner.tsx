"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "xapika-cookie-consent";

export function CookieBanner() {
  const t = useTranslations("cookie");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-custom">
            <div className="flex flex-col items-start gap-4 rounded-xl bg-white p-6 shadow-2xl md:flex-row md:items-center md:gap-6">
              {/* Icon & Text */}
              <div className="flex flex-1 items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)]/10">
                  <Cookie size={20} className="text-[var(--color-secondary)]" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-[var(--color-gray-900)]">
                    {t("title")}
                  </h3>
                  <p className="text-sm text-[var(--color-gray-500)]">
                    {t("description")}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex w-full shrink-0 gap-3 md:w-auto">
                <button
                  onClick={handleDecline}
                  className="flex-1 rounded-lg border border-[var(--color-gray-700)] px-5 py-2.5 text-sm font-medium text-[var(--color-gray-700)] transition-colors hover:bg-[var(--color-gray-50)] md:flex-none"
                >
                  {t("decline")}
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 rounded-lg bg-[var(--color-secondary)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0052A3] md:flex-none"
                >
                  {t("accept")}
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={handleDecline}
                className="absolute top-3 right-3 text-[var(--color-gray-400)] transition-colors hover:text-[var(--color-gray-700)] md:hidden"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
