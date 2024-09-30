import React from "react";
import { useTranslations } from "next-intl";
import { CardHeader } from "@/components/ui/card";
import ImageCarousel from "./components/ImageCarousel";
import ProjectCardTitle from "./components/ProjectCardTitle";
import ProjectCardDescription from "./components/ProjectCardDescription";

const Project2 = () => {
  const t = useTranslations("index");

  return (
    <section className="w-full flex-wrap flex gap-[5%] justify-center items-center my-auto mb-[5rem]">
      <ImageCarousel
        position="left"
        image={[
          {
            image: "/public/image/ifindgallery_screenshots/screenshot1.png",
            imageAlt: "iFindGallery",
          },
          {
            image: "/public/image/ifindgallery_screenshots/screenshot2.png",
            imageAlt: "iFindGallery",
          },
          {
            image: "/public/image/ifindgallery_screenshots/screenshot3.png",
            imageAlt: "iFindGallery",
          },
          {
            image: "/public/image/ifindgallery_screenshots/screenshot4.png",
            imageAlt: "iFindGallery",
          },
        ]}
      />
      <CardHeader className="w-[40%] max-md:w-full">
        <ProjectCardTitle
          project={{
            title: "iFindGallery",
            sourceCodeURL: "https://github.com/Takish155/iFindGallery",
            url: "https://ifindgallery.netlify.app/",
          }}
        />
        <ProjectCardDescription
          description={t("iFindGalleryDescription")}
          skillUsed="React, Typescript, Material UI, Unsplash API"
        />
      </CardHeader>
    </section>
  );
};

export default Project2;
