import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const TechStackHoverCard = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent>
        <h2 className="font-bold">{title}</h2>
        <p className=" max-sm:text-sm ">{description}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default TechStackHoverCard;
