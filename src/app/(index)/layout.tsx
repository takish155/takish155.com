import { M_PLUS_1p, Poppins } from "next/font/google";
import "./../globals.css";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Takeshi's Portfolio",
  description:
    "Discover Takeshi's portfolio, showcasing his front-end development skills and passion in his development journey.",
  openGraph: {
    title: "Takeshi's Portfolio",
    description:
      "Explore my latest projects and learn about my journey as a passionate front-end developer specializing in React, Next.js, and TypeScript.",
    images: ["/opengraph-image.png"],
  },
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
