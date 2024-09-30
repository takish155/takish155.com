import { useTranslations } from "next-intl";
import React from "react";
import dynamic from "next/dynamic";
import Project5 from "./Project5";
import Project6 from "./Project6";

const Project2 = dynamic(() => import("./Project2"));
const Project3 = dynamic(() => import("./Project3"));
const Project4 = dynamic(() => import("./Project4"));

const FeaturedProjectSection = () => {
  const t = useTranslations("index");
  return (
    <section className="w-[90%] max-w-[1300px] mx-auto" id="projects">
      <h2 className="font-bold mb-[3rem] pt-[5rem] text-6xl max-xl:text-6xl max-lg:text-5xl max-sm:text-4xl">
        {t("featuredProjects")}
      </h2>
      <Project6 />
      <Project5 />
      <Project4 />
      <Project3 />
      <Project2 />
    </section>
  );
};

export default FeaturedProjectSection;
