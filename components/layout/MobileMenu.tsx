"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "@/lib/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[var(--color-primary)]"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex h-20 items-center justify-between px-5">
                <Link
                  href="/"
                  onClick={onClose}
                  className="flex items-center gap-2 text-2xl font-bold text-white"
                >
                  <span className="text-[var(--color-secondary)]">X</span>
                  <span>apika</span>
                </Link>
                <button
                  onClick={onClose}
                  className="flex h-10 w-10 items-center justify-center text-white"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-5 py-8">
                <ul className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="block text-2xl font-semibold text-white transition-colors hover:text-[var(--color-secondary)]"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="border-t border-white/10 px-5 py-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Language</span>
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
