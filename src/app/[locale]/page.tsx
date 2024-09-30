import HeroSection from "@/components/section/HeroSection";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const AboutMeSection = dynamic(
  () => import("@/components/section/AboutMeSection")
);
const FeaturedProjectSection = dynamic(
  () => import("@/components/section/project_section/_FeaturedProjectSection")
);

const ContactSection = dynamic(
  () => import("@/components/section/ContactSection")
);

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("og:title"),
      description: t("og:description"),
      images: ["/opengraph-image.png"],
    },
  };
}

export default function Home({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <main
      className={`${
        params.locale === "en" ? "font-english" : "font-japanese"
      } min-h-screen`}
    >
      <HeroSection />
      <AboutMeSection />
      <FeaturedProjectSection />
      <ContactSection />
    </main>
  );
}
