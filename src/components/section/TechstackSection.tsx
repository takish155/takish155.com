import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TechStackHoverCard from "../TechStackHoverCard";

const TechstackSection = () => {
  const t = useTranslations("index");

  return (
    <section className="flex items-center">
      <div className="flex gap-8 flex-wrap relative">
        <div className="flex gap-2 ">
          <TechStackHoverCard
            title="Javascript"
            description={t("jsDescription")}
          >
            <Image
              src="/public/image/tech-stack/js.png"
              alt="JavaScript"
              height={50}
              width={50}
            />
          </TechStackHoverCard>

          <TechStackHoverCard
            title="TypeScript"
            description={t("tsDescription")}
          >
            <Image
              src="/public/image/tech-stack/ts.png"
              alt="TypeScript"
              height={50}
              width={50}
            />
          </TechStackHoverCard>
        </div>
        <div className="flex gap-2">
          <TechStackHoverCard title="React" description={t("reactDescription")}>
            <Image
              src="/public/image/tech-stack/react.png"
              alt="React"
              height={50}
              width={50}
            />
          </TechStackHoverCard>
          <TechStackHoverCard
            title="Next.js"
            description={t("nextDescription")}
          >
            <Image
              src="/public/image/tech-stack/next.png"
              alt="Next.js"
              height={50}
              width={50}
            />
          </TechStackHoverCard>
        </div>
        <div className="flex gap-2">
          <TechStackHoverCard
            title="Node.js"
            description={t("nodeDescription")}
          >
            <Image
              src="/public/image/tech-stack/node.png"
              alt="Node.js"
              height={50}
              width={50}
            />
          </TechStackHoverCard>
          <TechStackHoverCard
            title="Express"
            description={t("expressDescription")}
          >
            <Image
              src="/public/image/tech-stack/express.png"
              alt="Express"
              height={50}
              width={50}
            />
          </TechStackHoverCard>
        </div>
        <div className="flex gap-2">
          <TechStackHoverCard title="AWS" description={t("awsDescription")}>
            <Image
              src="/public/image/tech-stack/aws.png"
              alt="AWS"
              height={50}
              width={50}
            />
          </TechStackHoverCard>
          <TechStackHoverCard title="Redis" description={t("redisDescription")}>
            <Image
              src="/public/image/tech-stack/redis.png"
              alt="Redis"
              height={50}
              width={50}
            />
          </TechStackHoverCard>
        </div>
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
