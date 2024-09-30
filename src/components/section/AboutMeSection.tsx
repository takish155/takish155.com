import React from "react";
import myPfp from "@/../public/image/mypfp.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutMeSection = () => {
  const t = useTranslations("index");

  return (
    <section className="w-full bg-secondary" id="about-me">
      <div className="w-[90%] mx-auto min-h-screen my-auto flex justify-between items-center flex-wrap">
        <div className="w-[30%] max-sm:hidden ">
          <Image
            width={300}
            height={300}
            src="/public/image/mypfp.png"
            alt="My profile picture"
            className="w-full rounded-[30%] mb-8"
          />
        </div>
        <div className="w-[60%] max-sm:w-[90%]">
          <h2 className="text-6xl max-xl:text-6xl max-lg:text-5xl max-sm:text-4xl font-bold mb-8 max-sm:text-4xl">
            {t("aboutMe")}
          </h2>
          <p className="w-[70%] max-sm:w-[90%]">
            {t.rich("aboutMeDescription", {
              strong: (chunks) => (
                <strong className="font-extrabold text-primary">
                  {chunks}
                </strong>
              ),
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
