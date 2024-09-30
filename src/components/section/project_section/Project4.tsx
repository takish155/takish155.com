import { useTranslations } from "next-intl";
import { CardHeader } from "@/components/ui/card";
import ImageCarousel from "./components/ImageCarousel";
import ProjectCardTitle from "./components/ProjectCardTitle";
import ProjectCardDescription from "./components/ProjectCardDescription";

const Project4 = () => {
  const t = useTranslations("index");

  return (
    <section className="w-full flex-wrap flex gap-[5%] justify-center items-center my-auto mb-[5rem]">
      <ImageCarousel
        position="left"
        image={[
          {
            image: "/public/image/zeetaa_screenshots/zeetaa1.png",
            imageAlt: "Zeetaa",
          },
          {
            image: "/public/image/zeetaa_screenshots/zeetaa2.png",
            imageAlt: "Zeetaa",
          },
          {
            image: "/public/image/zeetaa_screenshots/zeetaa3.png",
            imageAlt: "Zeetaa",
          },
        ]}
      />
      <CardHeader className="w-[40%] max-md:w-full">
        <ProjectCardTitle
          project={{
            title: "Zeetaa",
            sourceCodeURL: "https://github.com/Takish155/Zeetaa",
            url: "https://zeetaa.vercel.app/en",
          }}
        />
        <ProjectCardDescription
          description={t("zeetaaDescription")}
          skillUsed="React, Next.js, Typescript, Prisma, NextAuth, MongoDB"
        />
      </CardHeader>
    </section>
  );
};

export default Project4;
