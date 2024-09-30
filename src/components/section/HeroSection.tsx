import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import TechstackSection from "./TechstackSection";

const HeroSection = () => {
  const t = useTranslations("index");

  return (
    <section
      className="flex flex-wrap w-[90%]  mx-auto justify-evenly items-center mt-[3rem] mb-[11rem] max-sm:flex-col-reverse"
      id="hero"
    >
      <div className="my-[arem] w-[50%] max-sm:w-full">
        <h2 className="font-bold mb-4 text-6xl max-xl:text-6xl max-lg:text-5xl max-sm:text-4xl">
          {t.rich("heroTitle", {
            span: (children) => (
              <span className="text-primaary">
                <br />
                {children}
              </span>
            ),
          })}
        </h2>
        <p className="mb-10">
          {t.rich("heroIntroduction", {
            span: (children) => (
              <strong className="text-primary font-extrabold">
                {children}
              </strong>
            ),
            br: () => <br className="max-lg:hidden" />,
          })}
        </p>
        <TechstackSection />
      </div>
      <div className="w-[30%] max-sm:w-[90%] relative">
        <Image
          width={300}
          height={300}
          src="/public/image/mypfp.png"
          alt="My profile picture"
          className="w-full rounded-[30%] mb-8"
        />
        <div className="absolute top-[-1.6rem] left-[-9rem] max-lg:hidden">
          <p className=" max-sm:text-sm  rotate-12">{t("me7yearsAgo")}</p>
          <Image
            width={100}
            height={100}
            src="/public/image/curly-arrow.png"
            className="rotate-45 mx-auto ml-5"
            alt={t("curlyArrow")}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
