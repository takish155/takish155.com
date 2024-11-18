import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import React from "react";

const ImageCarousel = ({
  image,
  position,
}: {
  image: { image: StaticImageData | string; imageAlt: string }[];
  position: "left" | "right";
}) => {
  return (
    <CardContent className="w-[55%] max-md:w-[85%] max-md:mt-6">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {image.map((img, index) => {
            return (
              <CarouselItem key={index}>
                <Image
                  width={500}
                  height={100}
                  src={img.image}
                  alt={img.imageAlt}
                  className="w-full rounded-md"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {position === "left" ? (
          <>
            <CarouselNext />
            <CarouselPrevious className="md:hidden" />
          </>
        ) : (
          <>
            <CarouselNext className="md:hidden" />
            <CarouselPrevious />
          </>
        )}
      </Carousel>
    </CardContent>
  );
};

export default ImageCarousel;
