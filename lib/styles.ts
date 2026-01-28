/**
 * Shared style utilities for consistent styling across components
 */

// Form input styles - Enhanced with Teal focus
export const formStyles = {
  input:
    "w-full rounded-xl border-2 border-[var(--color-gray-200)] bg-[var(--color-gray-50)] px-4 py-4 text-[var(--color-gray-900)] placeholder:text-[var(--color-gray-400)] focus:border-[var(--color-accent)] focus:bg-white focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all duration-300",
  inputError:
    "border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20",
  label: "block text-sm font-semibold text-[var(--color-gray-700)] mb-2",
  errorMessage: "mt-2 text-sm text-[var(--color-error)] flex items-center gap-1",
  checkbox:
    "h-5 w-5 rounded border-[var(--color-gray-300)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]",
} as const;

// Helper to combine input classes with error state
export function getInputClasses(hasError: boolean): string {
  return `${formStyles.input} ${hasError ? formStyles.inputError : ""}`;
}

// Animation easing curves
export const easings = {
  smooth: [0.22, 1, 0.36, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  snap: [0.4, 0, 0.2, 1],
} as const;

// Common animation variants for Framer Motion
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easings.smooth },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: easings.smooth },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: easings.smooth },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: easings.smooth },
  },
} as const;

// Stagger container for list animations
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;
