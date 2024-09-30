import { useTranslations } from "next-intl";
import { CardHeader } from "@/components/ui/card";
import ImageCarousel from "./components/ImageCarousel";
import ProjectCardTitle from "./components/ProjectCardTitle";
import ProjectCardDescription from "./components/ProjectCardDescription";

const Project6 = () => {
  const t = useTranslations("index");

  return (
    <section className="w-full flex-wrap flex gap-[5%] justify-center items-center my-auto mb-[5rem]">
      <ImageCarousel
        position="left"
        image={[
          {
            image: "/public/image/omniparts_screenshots/screenshot1.png",
            imageAlt: "Zeetaa",
          },
          {
            image: "/public/image/omniparts_screenshots/screenshot2.png",
            imageAlt: "Zeetaa",
          },
          {
            image: "/public/image/omniparts_screenshots/screenshot3.png",
            imageAlt: "Zeetaa",
          },
        ]}
      />
      <CardHeader className="w-[40%] max-md:w-full">
        <ProjectCardTitle
          project={{
            title: "Omniparts",
            sourceCodeURL: "https://github.com/Takish155/omniparts",
            url: "https://omniparts.vercel.app/en",
          }}
        />
        <ProjectCardDescription
          description={t("omnipartsDescription")}
          skillUsed="React, Next.js, Typescript, Prisma, NextAuth, Supabase, Stripe"
        />
      </CardHeader>
    </section>
  );
};

export default Project6;
