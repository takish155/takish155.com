import React from "react";
import { useTranslations } from "next-intl";
import { CardHeader } from "@/components/ui/card";
import ImageCarousel from "./components/ImageCarousel";
import ProjectCardTitle from "./components/ProjectCardTitle";
import ProjectCardDescription from "./components/ProjectCardDescription";

const Project3 = () => {
  const t = useTranslations("index");

  return (
    <section className="w-full flex-wrap flex gap-[5%] justify-center items-center my-auto mb-[5rem] max-md:flex-col-reverse">
      <CardHeader className="w-[40%] max-md:w-full">
        <ProjectCardTitle
          project={{
            title: "Gamiplex",
            sourceCodeURL: "https://github.com/Takish155/Gamiplex",
            url: "https://gamiplex.vercel.app/",
          }}
        />
        <ProjectCardDescription
          description={t("gamiplexDescription")}
          skillUsed="React, Next.js, Typescript, Prisma, NextAuth, Material UI, MongoDB"
        />
      </CardHeader>
      <ImageCarousel
        position="right"
        image={[
          {
            image: "/public/image/gamiplex_screenshots/gamiplex1.png",
            imageAlt: "Gamiplex",
          },
          {
            image: "/public/image/gamiplex_screenshots/gamiplex2.png",
            imageAlt: "Gamiplex",
          },
          {
            image: "/public/image/gamiplex_screenshots/gamiplex3.png",
            imageAlt: "Gamiplex",
          },
        ]}
      />
    </section>
  );
};

export default Project3;
