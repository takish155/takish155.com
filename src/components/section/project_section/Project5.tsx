import { useTranslations } from "next-intl";
import { CardHeader } from "@/components/ui/card";
import ImageCarousel from "./components/ImageCarousel";
import ProjectCardTitle from "./components/ProjectCardTitle";
import ProjectCardDescription from "./components/ProjectCardDescription";

const Project5 = () => {
  const t = useTranslations("index");

  return (
    <section className="w-full flex-wrap flex gap-[5%] justify-center items-center my-auto mb-[5rem] max-md:flex-col-reverse">
      <CardHeader className="w-[40%] max-md:w-full">
        <ProjectCardTitle
          project={{
            title: "Budgetplex",
            sourceCodeURL: "https://github.com/Takish155/budgetplex",
            url: "https://budgetplex.vercel.app/",
          }}
        />
        <ProjectCardDescription
          description={t("budgetplexDescription")}
          skillUsed="React, Next.js, Typescript, Prisma, NextAuth, MongoDB"
        />
      </CardHeader>
      <ImageCarousel
        position="right"
        image={[
          {
            image: "/public/image/budgetplex_screenshots/screenshot1.png",
            imageAlt: "Zeetaa",
          },
          {
            image: "/public/image/budgetplex_screenshots/screenshot2.png",
            imageAlt: "Zeetaa",
          },
          {
            image: "/public/image/budgetplex_screenshots/screenshot3.png",
            imageAlt: "Zeetaa",
          },
        ]}
      />
    </section>
  );
};

export default Project5;
