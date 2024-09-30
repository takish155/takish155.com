import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const ContactSection = () => {
  const t = useTranslations("index");

  return (
    <section className="w-full py-10 px-4 bg-secondary" id="contact-me">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 ">{t("contactMe")}</h2>
        <p className=" max-sm:text-sm  mb-8">{t("contactMeDescription")}</p>
        <div className="inline-block bg-background rounded-full p-1">
          <div className="flex items-center space-x-2 px-6 py-3">
            <Mail className="h-6 w-6 text-primary" />
            <span className="text-md font-medium">clawhd3519@icloud.com</span>
          </div>
        </div>
        <div className="mt-8">
          <Link
            href="mailto:clawhd3519@icloud.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="rounded-full px-8 transition-transform hover:scale-105"
            >
              {t("sendEmail")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
