"use client";
import { Card, Typography } from "@material-tailwind/react";

export default function ActivityCard({ title, description, image, reverse }: { title: string, description: string, image: string, reverse: boolean }) {
    return (
        <Card className={`flex flex-col overflow-hidden ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <div className="h-full bg-cover bg-center min-h-[350px] w-full md:w-1/2" style={{ backgroundImage: "url("+image+")" }}>
            </div>
            <div className="p-10 flex flex-col justify-center text-center md:text-left w-full md:w-1/2">
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography variant="paragraph" color="blue-gray" className="mb-2">
                    {description}
                </Typography>
            </div>
        </Card>
    )
}
