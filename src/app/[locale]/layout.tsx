import { NextIntlClientProvider, useMessages } from "next-intl";
import "./../globals.css";
import { setRequestLocale, unstable_setRequestLocale } from "next-intl/server";
import Header from "@/components/header/Header";
import { M_PLUS_1p, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { routing } from "@/routing";
import { notFound } from "next/navigation";

const locales = ["en", "ja"];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
});

const m_plus = M_PLUS_1p({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800"],
  variable: "--font-m-plus",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${poppins.variable} ${m_plus.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
