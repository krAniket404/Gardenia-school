import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";


interface ExploreActivityCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ExploreActivityCard({ img, title, desc }: ExploreActivityCardProps) {
  return (
    <Card className="border">
      <CardHeader className="h-64">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover scale-[1.1]"
        />
      </CardHeader>
      <CardBody>
        <a
          href="/activities"
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <Typography variant="h5" className="mb-2 normal-case">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Link href="/activities">
          <Button variant="outlined" color="red">View All</Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default ExploreActivityCard;