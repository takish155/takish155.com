import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TechStackHoverCard from "../TechStackHoverCard";
import techStack from "@/constant/techStack";

const TechstackSection = () => {
  const t = useTranslations("index");

  return (
    <section className="flex items-center">
      <div className="flex gap-4 flex-wrap relative">
        {techStack.map((tech) => (
          <TechStackHoverCard
            key={tech.title}
            title={tech.title}
            description={t(tech.description as any)}
          >
            <Image
              src={`/public/image/tech-stack/${tech.imgPath}.png`}
              alt={tech.title}
              height={50}
              width={50}
            />
          </TechStackHoverCard>
        ))}
        <div className="absolute top-16 left-20 max-lg:hidden">
          <Image
            src="/public/image/curly-arrow.png"
            className="-rotate-45 mx-auto"
            width={100}
            height={100}
            alt={t("curlyArrow")}
          />
          <p className="-rotate-6  max-sm:text-sm ">{t("tryHovering")}</p>
        </div>
      </div>
    </section>
  );
};

export default TechstackSection;
