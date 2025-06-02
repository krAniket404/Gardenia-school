import React from "react";
// import Image from "next/image";
import { Card, CardBody, Typography } from "@material-tailwind/react";

interface WhyUsCardProps {
  title: string;
  desc: string;
  icon: React.ElementType;
}

function WhyUsCard({ title, desc, icon: Icon }: WhyUsCardProps) {
  return (
    <Card className="relative min-h-[12rem]  w-full overflow-hidden border border-red-200 shadow-none">
      
      <CardBody className="relative flex flex-col gap-4">
        <Icon className="h-8 w-8 text-red-500" />
        <div>
          <Typography variant="h5">
            {title}
          </Typography>
          <Typography variant="paragraph">
            {desc}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
export default WhyUsCard;
