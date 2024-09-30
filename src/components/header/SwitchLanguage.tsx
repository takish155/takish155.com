"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguagesIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const SwitchLanguage = () => {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <LanguagesIcon />
        <p className="sr-only">{t("switchLanguage")}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={locale === "en"}
          onClick={() => {
            locale === "ja" && router.push("/en");
          }}
        >
          {t("english")}
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={locale === "ja"}
          onClick={() => {
            locale === "en" && router.push("/ja");
          }}
        >
          {t("japanese")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SwitchLanguage;
