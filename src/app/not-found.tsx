"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <>
        <Navbar />
        <div className="flex flex-col items-center justify-center my-10">
            <Image src="/image/404error.svg" alt="404" width={500} height={500} />
            <h1 className="text-4xl font-bold mt-5">Page Not Found</h1>
            <p className="text-gray-500">The page you are looking for does not exist.</p>
            <Button variant="filled" color="gray" className="mt-5" onClick={() => router.push("/")}>Go to Home</Button>
        </div>
        <Footer />
        </>
    );
}