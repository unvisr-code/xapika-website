"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type CardVariant = "default" | "dark" | "glass" | "gradient" | "bordered" | "elevated";
type CardSize = "sm" | "md" | "lg";

interface CardProps {
  icon?: LucideIcon;
  iconColor?: string;
  title: string;
  description: string;
  className?: string;
  variant?: CardVariant;
  size?: CardSize;
  hoverable?: boolean;
}

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-white border border-[var(--color-gray-50)] shadow-sm hover:border-[var(--color-secondary)]/30",
  dark:
    "bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white",
  glass:
    "bg-white/10 backdrop-blur-xl border border-white/20 text-white",
  gradient:
    "bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary-light)] text-white",
  bordered:
    "bg-white border-2 border-[var(--color-gray-100)] hover:border-[var(--color-secondary)]",
  elevated:
    "bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.18)]",
};

const sizeStyles: Record<CardSize, string> = {
  sm: "p-5 rounded-xl",
  md: "p-6 md:p-8 rounded-2xl",
  lg: "p-8 md:p-10 rounded-2xl",
};

const cardMotion = {
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Card({
  icon: Icon,
  iconColor = "from-[var(--color-secondary)] to-[var(--color-primary-light)]",
  title,
  description,
  className = "",
  variant = "default",
  size = "md",
  hoverable = true,
}: CardProps) {
  const isDark = variant === "dark" || variant === "glass" || variant === "gradient";

  return (
    <motion.div
      whileHover={hoverable ? "hover" : undefined}
      variants={cardMotion}
      className={`${variantStyles[variant]} ${sizeStyles[size]} transition-all duration-300 ${className}`}
    >
      {Icon && (
        <div
          className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${iconColor} shadow-lg`}
        >
          <Icon size={28} className="text-white" />
        </div>
      )}
      <h3
        className={`mb-3 text-xl font-bold ${
          isDark ? "text-white" : "text-[var(--color-gray-900)]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`leading-relaxed ${
          isDark ? "text-white/70" : "text-[var(--color-gray-500)]"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}

// Service Card with enhanced hover effects
interface ServiceCardProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  href: string;
  variant?: "default" | "large" | "wide";
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  iconColor,
  title,
  description,
  href,
  variant = "default",
  className = "",
}: ServiceCardProps) {
  const variantClasses = {
    default: "p-6 md:p-8",
    large: "p-8 md:p-10",
    wide: "p-6 md:p-8 md:flex md:items-center md:gap-8",
  };

  return (
    <motion.a
      href={href}
      whileHover="hover"
      variants={cardMotion}
      className={`group relative block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 ${variantClasses[variant]} ${className}`}
    >
      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${iconColor} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

      <div className={`relative z-10 ${variant === "wide" ? "md:flex md:items-center md:gap-8" : ""}`}>
        {/* Icon */}
        <div
          className={`mb-6 ${variant === "wide" ? "md:mb-0" : ""} flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${iconColor} shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon size={28} className="text-white" />
        </div>

        {/* Content */}
        <div className={variant === "wide" ? "flex-1" : ""}>
          <h3 className="mb-3 text-xl font-bold text-[var(--color-gray-900)] group-hover:text-[var(--color-secondary)] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[var(--color-gray-500)] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Arrow indicator */}
        <motion.div
          className={`${variant === "wide" ? "" : "mt-6"} flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)]`}
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
        >
          <span>Learn more</span>
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  );
}

// Stat Card for numbers/metrics
interface StatCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export function StatCard({ value, label, icon: Icon, className = "" }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`bg-white p-6 rounded-xl shadow-sm border border-[var(--color-gray-50)] ${className}`}
    >
      {Icon && (
        <Icon size={24} className="mb-3 text-[var(--color-secondary)]" />
      )}
      <div className="text-3xl md:text-4xl font-bold text-[var(--color-gray-900)] mb-1">
        {value}
      </div>
      <div className="text-sm text-[var(--color-gray-500)]">{label}</div>
    </motion.div>
  );
}
