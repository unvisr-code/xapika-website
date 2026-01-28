"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Link } from "@/lib/i18n/routing";

type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  href?: never;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "link";
  href: string;
  type?: never;
  disabled?: never;
  onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-secondary)] text-white shadow-lg shadow-[var(--color-secondary)]/25 hover:shadow-[var(--color-secondary)]/40 hover:shadow-xl",
  secondary:
    "border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white",
  ghost:
    "text-[var(--color-gray-700)] hover:bg-[var(--color-gray-100)]",
  accent:
    "bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent)]/25 hover:shadow-[var(--color-accent)]/40 hover:shadow-xl",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-3",
};

// Motion variants for hover/tap effects
const buttonMotion = {
  hover: {
    y: -2,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  },
  tap: {
    y: 0,
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    variant = "primary",
    size = "md",
    className = "",
    children,
    icon,
    iconPosition = "right",
    ...props
  },
  ref
) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  );

  if (props.as === "link") {
    return (
      <motion.div
        whileHover="hover"
        whileTap="tap"
        variants={buttonMotion}
        className="inline-block"
      >
        <Link
          href={props.href}
          className={`${classes} group`}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  const { as: _as, ...buttonProps } = props;

  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      variants={buttonMotion}
      className={`${classes} group`}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...buttonProps}
    >
      {content}
    </motion.button>
  );
});
