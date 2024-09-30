import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { LanguagesIcon } from "lucide-react";
import SwitchLanguage from "./SwitchLanguage";
import { useLocale, useTranslations } from "next-intl";

const Header = () => {
  const locale = useLocale();
  const t = useTranslations("header");

  return (
    <header className="sticky top-0 z-50">
      <Card>
        <CardHeader className="flex-row items-center sm:justify-around">
          <h1 className="font-english text-2xl font-semibold">
            <Link href={`/${locale}`}>takish155</Link>
          </h1>
          <nav className="max-sm:hidden my-auto !mt-0">
            <ul className="flex gap-4 items-center">
              <li>
                <Link href="#about-me">{t("aboutMe")}</Link>
              </li>
              <li>
                <Link href="#projects">{t("projects")}</Link>
              </li>
              <li>
                <Link href="#contact-me">
                  <Button>{t("contact")}</Button>
                </Link>
              </li>
              <li>
                <SwitchLanguage />
              </li>
            </ul>
          </nav>
        </CardHeader>
      </Card>
    </header>
  );
};

export default Header;
