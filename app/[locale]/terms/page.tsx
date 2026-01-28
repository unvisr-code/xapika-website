import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing the use of Xapika website and services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const t = useTranslations("footer.legal");

  return (
    <>
      <PageHero title={t("terms")} breadcrumbs={[{ label: t("terms") }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none text-[var(--color-gray-600)]">
              <h2 className="text-[var(--color-gray-900)]">
                Terms of Service
              </h2>
              <p>
                Welcome to Xapika. By accessing and using this website, you
                accept and agree to be bound by the terms and provision of this
                agreement.
              </p>

              <h2 className="text-[var(--color-gray-900)]">Use License</h2>
              <p>
                Permission is granted to temporarily view the materials on
                Xapika&apos;s website for personal, non-commercial transitory
                viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained on the website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
              </ul>

              <h2 className="text-[var(--color-gray-900)]">Disclaimer</h2>
              <p>
                The materials on Xapika&apos;s website are provided on an
                &apos;as is&apos; basis. Xapika makes no warranties, expressed
                or implied, and hereby disclaims and negates all other
                warranties including, without limitation, implied warranties or
                conditions of merchantability, fitness for a particular purpose,
                or non-infringement of intellectual property.
              </p>

              <h2 className="text-[var(--color-gray-900)]">Limitations</h2>
              <p>
                In no event shall Xapika or its suppliers be liable for any
                damages arising out of the use or inability to use the materials
                on Xapika&apos;s website.
              </p>

              <h2 className="text-[var(--color-gray-900)]">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws of Poland and you irrevocably submit to
                the exclusive jurisdiction of the courts in that location.
              </p>

              <h2 className="text-[var(--color-gray-900)]">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <p>
                Xapika Sp. z o.o.
                <br />
                ul. Kolejowa 1
                <br />
                00-001 Warsaw, Poland
                <br />
                Email: legal@xapika.com
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
