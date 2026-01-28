"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Send, Loader2, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { formStyles, getInputClasses } from "@/lib/styles";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const tErrors = useTranslations("errors");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      type: undefined,
      message: "",
      privacyConsent: false,
      website: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-white p-8 md:p-10 shadow-xl border border-[var(--color-gray-100)]"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-gray-900)] mb-2">
          {t("title")}
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-full" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot - visually hidden but accessible to bots */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        {/* Name & Company */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative">
            <label htmlFor="name" className={formStyles.label}>
              {t("name")} <span className="text-[var(--color-accent)]">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder={t("namePlaceholder")}
              className={getInputClasses(!!errors.name)}
              {...register("name")}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className={formStyles.errorMessage}
                >
                  <AlertCircle size={14} />
                  {tErrors("required")}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label htmlFor="company" className={formStyles.label}>
              {t("company")}
            </label>
            <input
              id="company"
              type="text"
              placeholder={t("companyPlaceholder")}
              className={formStyles.input}
              {...register("company")}
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className={formStyles.label}>
              {t("email")} <span className="text-[var(--color-accent)]">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder={t("emailPlaceholder")}
              className={getInputClasses(!!errors.email)}
              {...register("email")}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className={formStyles.errorMessage}
                >
                  <AlertCircle size={14} />
                  {tErrors("email")}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label htmlFor="phone" className={formStyles.label}>
              {t("phone")}
            </label>
            <input
              id="phone"
              type="tel"
              placeholder={t("phonePlaceholder")}
              className={formStyles.input}
              {...register("phone")}
            />
          </div>
        </div>

        {/* Inquiry Type */}
        <div>
          <label htmlFor="type" className={formStyles.label}>
            {t("type")} <span className="text-[var(--color-accent)]">*</span>
          </label>
          <select
            id="type"
            className={`${getInputClasses(!!errors.type)} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-12`}
            {...register("type")}
          >
            <option value="">{t("typePlaceholder")}</option>
            <option value="general">{t("types.general")}</option>
            <option value="partnership">{t("types.partnership")}</option>
            <option value="support">{t("types.support")}</option>
            <option value="other">{t("types.other")}</option>
          </select>
          <AnimatePresence>
            {errors.type && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className={formStyles.errorMessage}
              >
                <AlertCircle size={14} />
                {tErrors("required")}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={formStyles.label}>
            {t("message")} <span className="text-[var(--color-accent)]">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder={t("messagePlaceholder")}
            className={`${getInputClasses(!!errors.message)} resize-none`}
            {...register("message")}
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className={formStyles.errorMessage}
              >
                <AlertCircle size={14} />
                {tErrors("minLength", { min: "10" })}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Privacy Consent */}
        <div className="rounded-xl bg-[var(--color-gray-50)] p-4">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              className={`mt-0.5 ${formStyles.checkbox} cursor-pointer`}
              {...register("privacyConsent")}
            />
            <span className="text-sm text-[var(--color-gray-600)] group-hover:text-[var(--color-gray-900)] transition-colors">
              {t("privacy")} <span className="text-[var(--color-accent)]">*</span>
            </span>
          </label>
          <AnimatePresence>
            {errors.privacyConsent && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className={`${formStyles.errorMessage} mt-2`}
              >
                <AlertCircle size={14} />
                {tErrors("required")}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={submitStatus === "loading"}
          whileHover={{ scale: submitStatus === "loading" ? 1 : 1.01 }}
          whileTap={{ scale: submitStatus === "loading" ? 1 : 0.99 }}
          className="relative flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-accent)]/30 disabled:cursor-not-allowed disabled:opacity-70 overflow-hidden"
        >
          {submitStatus === "loading" ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              {t("sending")}
            </>
          ) : (
            <>
              <Send size={20} />
              {t("submit")}
            </>
          )}
        </motion.button>

        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="flex items-center gap-3 rounded-xl bg-[var(--color-success)]/10 p-5 border border-[var(--color-success)]/20"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-success)]/20">
                <CheckCircle size={20} className="text-[var(--color-success)]" />
              </div>
              <p className="text-[var(--color-success)] font-medium">{t("success")}</p>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="flex items-center gap-3 rounded-xl bg-[var(--color-error)]/10 p-5 border border-[var(--color-error)]/20"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-error)]/20">
                <XCircle size={20} className="text-[var(--color-error)]" />
              </div>
              <p className="text-[var(--color-error)] font-medium">{t("error")}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}
