"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Send, Loader2, CheckCircle, XCircle } from "lucide-react";
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
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-[var(--color-gray-900)]">
        {t("title")}
      </h2>

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
          <div>
            <label htmlFor="name" className={formStyles.label}>
              {t("name")} *
            </label>
            <input
              id="name"
              type="text"
              placeholder={t("namePlaceholder")}
              className={getInputClasses(!!errors.name)}
              {...register("name")}
            />
            {errors.name && (
              <p className={formStyles.errorMessage}>
                {tErrors("required")}
              </p>
            )}
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
              {t("email")} *
            </label>
            <input
              id="email"
              type="email"
              placeholder={t("emailPlaceholder")}
              className={getInputClasses(!!errors.email)}
              {...register("email")}
            />
            {errors.email && (
              <p className={formStyles.errorMessage}>
                {tErrors("email")}
              </p>
            )}
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
            {t("type")} *
          </label>
          <select
            id="type"
            className={getInputClasses(!!errors.type)}
            {...register("type")}
          >
            <option value="">{t("typePlaceholder")}</option>
            <option value="general">{t("types.general")}</option>
            <option value="partnership">{t("types.partnership")}</option>
            <option value="support">{t("types.support")}</option>
            <option value="other">{t("types.other")}</option>
          </select>
          {errors.type && (
            <p className={formStyles.errorMessage}>
              {tErrors("required")}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={formStyles.label}>
            {t("message")} *
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder={t("messagePlaceholder")}
            className={`${getInputClasses(!!errors.message)} resize-none`}
            {...register("message")}
          />
          {errors.message && (
            <p className={formStyles.errorMessage}>
              {tErrors("minLength", { min: "10" })}
            </p>
          )}
        </div>

        {/* Privacy Consent */}
        <div>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              className={`mt-1 ${formStyles.checkbox}`}
              {...register("privacyConsent")}
            />
            <span className="text-sm text-[var(--color-gray-600)]">
              {t("privacy")} *
            </span>
          </label>
          {errors.privacyConsent && (
            <p className={formStyles.errorMessage}>
              {tErrors("required")}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitStatus === "loading"}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-secondary)] px-6 py-4 font-semibold text-white transition-all hover:bg-[#0052A3] disabled:cursor-not-allowed disabled:opacity-50"
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
        </button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="flex items-center gap-2 rounded-lg bg-[var(--color-success)]/10 p-4 text-[var(--color-success)]">
            <CheckCircle size={20} />
            <p>{t("success")}</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="flex items-center gap-2 rounded-lg bg-[var(--color-error)]/10 p-4 text-[var(--color-error)]">
            <XCircle size={20} />
            <p>{t("error")}</p>
          </div>
        )}
      </form>
    </div>
  );
}
