import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Xapika collects, uses, and protects your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  const t = useTranslations("footer.legal");

  return (
    <>
      <PageHero title={t("privacy")} breadcrumbs={[{ label: t("privacy") }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none text-[var(--color-gray-600)]">
              <h2 className="text-[var(--color-gray-900)]">Introduction</h2>
              <p>
                Xapika Sp. z o.o. (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website.
              </p>

              <h2 className="text-[var(--color-gray-900)]">
                Information We Collect
              </h2>
              <p>
                We may collect information about you in a variety of ways. The
                information we may collect on the Site includes:
              </p>
              <ul>
                <li>
                  <strong>Personal Data:</strong> Personally identifiable
                  information, such as your name, email address, telephone
                  number, and company name that you voluntarily give to us when
                  you contact us.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information our servers
                  automatically collect when you access the Site, such as your
                  IP address, browser type, operating system, access times, and
                  the pages you have viewed directly before and after accessing
                  the Site.
                </li>
              </ul>

              <h2 className="text-[var(--color-gray-900)]">
                Use of Your Information
              </h2>
              <p>
                Having accurate information about you permits us to provide you
                with a smooth, efficient, and customized experience.
                Specifically, we may use information collected about you to:
              </p>
              <ul>
                <li>Respond to your inquiries and requests</li>
                <li>Send you marketing and promotional communications</li>
                <li>Improve our website and services</li>
                <li>Compile anonymous statistical data and analysis</li>
              </ul>

              <h2 className="text-[var(--color-gray-900)]">Cookies</h2>
              <p>
                We may use cookies and similar tracking technologies to access
                or store information. You can set your browser to refuse all or
                some browser cookies, or to alert you when cookies are being
                sent.
              </p>

              <h2 className="text-[var(--color-gray-900)]">Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy,
                please contact us at:
              </p>
              <p>
                Xapika Sp. z o.o.
                <br />
                ul. Kolejowa 1
                <br />
                00-001 Warsaw, Poland
                <br />
                Email: privacy@xapika.com
              </p>

              <p className="text-sm text-[var(--color-gray-400)]">
                Last updated: January 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
