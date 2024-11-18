import { CardDescription } from "@/components/ui/card";
import React from "react";

const ProjectCardDescription = ({
  description,
  skillUsed,
}: {
  description: string;
  skillUsed: string;
}) => {
  return (
    <CardDescription>
      <p className="max-sm:text-sm  mb-6 font-light">{description}</p>
      <p className="max-sm:text-sm ">{skillUsed}</p>
    </CardDescription>
  );
};

export default ProjectCardDescription;
