import { useTranslations } from "next-intl";
import React from "react";
import projects from "@/constant/projects";
import ImageCarousel from "./project_section/ImageCarousel";
import { CardHeader } from "@/components/ui/card";
import ProjectCardTitle from "./project_section/ProjectCardTitle";
import ProjectCardDescription from "./project_section/ProjectCardDescription";

const FeaturedProjectSection = () => {
  const t = useTranslations("index");
  return (
    <section className="w-[90%] max-w-[1300px] mx-auto" id="projects">
      <h2 className="font-bold mb-[3rem] pt-[5rem] text-6xl max-xl:text-6xl max-lg:text-5xl max-sm:text-4xl">
        {t("featuredProjects")}
      </h2>
      {projects.map((project, index) => {
        const lowerCasename = project.title.toLowerCase();

        const images = Array.from({ length: project.imageCount }, (_, i) => {
          return {
            image: `/public/image/${lowerCasename}_screenshots/screenshot${
              i + 1
            }.png`,
            imageAlt: project.title,
          };
        });

        return (
          <section
            key={index}
            className={`${
              index % 2 === 0 ? "" : "flex-row-reverse"
            } w-full flex flex-wrap gap-[5%] justify-center items-center my-auto mb-[5rem]`}
          >
            <ImageCarousel
              position={index % 2 === 0 ? "left" : "right"}
              image={images}
            />
            <CardHeader className="w-[40%] max-md:w-full">
              <ProjectCardTitle
                project={{
                  title: project.title,
                  sourceCodeURL: project.sourceCodeLink,
                  url: project.liveLink,
                }}
              />
              <ProjectCardDescription
                description={t(`${lowerCasename}Description` as any)}
                skillUsed={project.techStack.join(", ")}
              />
            </CardHeader>
          </section>
        );
      })}
    </section>
  );
};

export default FeaturedProjectSection;
