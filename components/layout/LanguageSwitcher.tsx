"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; max-age=31536000; path=/`;
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div
      className={`flex items-center gap-2 ${isPending ? "opacity-50" : ""}`}
    >
      <Globe size={16} className="text-white/60" />
      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 text-sm transition-colors ${
          locale === "en"
            ? "font-bold text-white"
            : "text-white/60 hover:text-white"
        }`}
        disabled={isPending}
      >
        EN
      </button>
      <span className="text-white/40">|</span>
      <button
        onClick={() => switchLocale("ko")}
        className={`px-2 py-1 text-sm transition-colors ${
          locale === "ko"
            ? "font-bold text-white"
            : "text-white/60 hover:text-white"
        }`}
        disabled={isPending}
      >
        KO
      </button>
    </div>
  );
}
